# -*- coding: utf-8 -*-
"""The app module, containing the app factory function."""
from flask import Flask
from qvote.extensions import bcrypt, cache, db, migrate, cors

from qvote import polls, commands
from qvote.configs import ProdConfig


def create_app(config_object=ProdConfig):
    """An application factory, as explained here:
    http://flask.pocoo.org/docs/patterns/appfactories/.
    :param config_object: The configuration object to use.
    """
    app = Flask(__name__)
    app.config.from_object(config_object)
    register_extensions(app)
    register_blueprints(app)
    register_commands(app)
    return app


def register_extensions(app):
    """Register Flask extensions."""
    bcrypt.init_app(app)
    cache.init_app(app)
    db.init_app(app)
    migrate.init_app(app, db)


def register_blueprints(app):
    """Register Flask blueprints."""
    app.register_blueprint(polls.views.polls_blueprint)


def register_commands(app):
    """Register Click commands."""
    app.cli.add_command(commands.test)
