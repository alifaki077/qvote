# -*- coding: utf-8 -*-
from qvote.extensions import db

poll_voter_assoc = db.Table("poll_voter_rel",
                           db.Column('poll_id', db.Integer,db.ForeignKey('polls.id'), nullable=False),
                           db.Column('voter_id',db.Integer,db.ForeignKey('voters.id'),nullable=False),
                        )


class Voter(db.Model):
    __tablename__ = "voters"

    id = db.Column(db.Integer, primary_key=True)
    ip = db.Column(db.String(45))

    def __init__(self, ip):
        self.ip = ip

    def __repr__(self):
        return "<Voter - {}>".format(self.ip)

    def to_dict(self):
        return {
            "id": self.id,
            "ip": self.ip
        }


class Poll(db.Model):

    __tablename__ = "polls"

    id = db.Column(db.Integer, primary_key=True)
    uid = db.Column(db.String(16))
    title = db.Column(db.String(256), nullable=False)
    total_votes = db.Column(db.Integer, nullable=False, default=0)
    choices = db.relationship("Choice", backref=db.backref("poll"))
    voters = db.relationship('Voter', secondary=poll_voter_assoc, backref='polls')

    def __init__(self, title):
        self.title = title

    def __repr__(self):
        return "<Poll - {}>".format(self.uid)

    def to_dict(self):
        return {
            "id": self.id,
            "uid": self.uid,
            "title": self.title,
            "total_votes": self.total_votes,
            "choices": [choice.to_dict() for choice in self.choices]
        }


class Choice(db.Model):

    __tablename__ = "choices"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128), nullable=False)
    votes = db.Column(db.Integer, nullable=False, default=0)
    poll_id = db.Column(db.Integer, db.ForeignKey('polls.id'))
    ratio = db.Column(db.Float, default=0.0)

    def __init__(self, name, poll_id):
        self.name = name
        self.poll_id = poll_id

    def __repr__(self):
        return "<Choice - {}>".format(self.name)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "votes": self.votes,
            "poll_id": self.poll_id,
            "ratio": self.ratio
        }
