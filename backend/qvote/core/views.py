# -*- coding: utf-8 -*-
import os
from flask import Blueprint, send_file, send_from_directory

core_blueprint = Blueprint("core", __name__)

WEB_CLIENT_PATH = "../../../web-client" # TODO: change this


@core_blueprint.route("/")
def index():
    return send_file(WEB_CLIENT_PATH + "/dist/index.html")


@core_blueprint.route("/static/js/<filename>")
def js(filename):
    return send_from_directory(WEB_CLIENT_PATH + "/dist/static/js", filename)


@core_blueprint.route("/static/css/<filename>")
def css(filename):
    return send_from_directory(WEB_CLIENT_PATH + "/dist/static/css", filename)
