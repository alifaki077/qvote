# -*- coding: utf-8 -*-
from flask_bcrypt import Bcrypt
from flask_caching import Cache
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from hashids import Hashids

_hashids = Hashids(min_length=4)

bcrypt = Bcrypt()
db = SQLAlchemy()
migrate = Migrate()
cache = Cache()
cors = CORS()
