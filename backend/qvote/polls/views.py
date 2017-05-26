# -*- coding: utf-8 -*-
from flask import Blueprint, request, jsonify
from flask.helpers import get_debug_flag
from flask.views import MethodView
from .models import Poll, Choice, Voter
from qvote.extensions import db, _hashids
from webargs import fields
from webargs.flaskparser import use_kwargs


polls_blueprint = Blueprint("polls", __name__)

vote_args = {
    "poll_id": fields.Int(required=True),
    "choice_id": fields.Int(required=True),
    "ip": fields.Str(missing="")
}

poll_args = {
    "title": fields.Str(required=True),
    "choices": fields.List(fields.Str(required=True), required=True),
}

@polls_blueprint.route("/api/vote", methods=("POST",))
@use_kwargs(vote_args)
def vote(poll_id, choice_id, ip):
    if not get_debug_flag():
        ip = request.remote_addr
    poll = Poll.query.get_or_404(poll_id)
    choice = Choice.query.get_or_404(choice_id)
    voter = Voter.query.filter_by(ip=ip).first()
    if voter is None:
        voter = Voter(ip)
    if voter not in poll.voters:
        poll.voters.append(voter)
        poll.total_votes += 1
        choice.votes += 1
        for choice in poll.choices:
            choice.ratio = round((choice.votes / poll.total_votes) * 100, 1)
            db.session.add(choice)
    db.session.add_all([poll, voter])
    db.session.commit()
    return jsonify(poll.to_dict())


class PollsApi(MethodView):

    def get(self, uid=None):
        if uid is None:
            polls = Poll.query.all()
            return jsonify([poll.to_dict() for poll in polls])
        else:
            poll = Poll.query.filter_by(uid=uid).first_or_404()
            return jsonify(poll.to_dict())

    @use_kwargs(poll_args)
    def post(self, title, choices):
        poll = Poll(title)
        db.session.add(poll)
        db.session.flush()
        poll.uid = _hashids.encode(poll.id)

        for choice in choices:
            c = Choice(choice, poll.id)
            db.session.add(c)
        db.session.commit()
        return jsonify(poll.to_dict())


polls_view = PollsApi.as_view("polls_view")

polls_blueprint.add_url_rule("/api/polls",
                              defaults={"uid": None},
                              view_func=polls_view,
                              methods=("GET",)
                            )

polls_blueprint.add_url_rule("/api/polls/<string:uid>",
                              view_func=polls_view,
                              methods=("GET",)
                            )

polls_blueprint.add_url_rule("/api/polls",
                              view_func=polls_view,
                              methods=("POST",)
                            )
