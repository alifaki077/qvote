# -*- coding: utf-8 -*-
"""Application configuration."""
import os


class Config(object):
    """Base configuration."""

    SECRET_KEY = os.environ.get('QVOTE_SECRET', 'secret-key')
    BCRYPT_LOG_ROUNDS = 13
    CACHE_TYPE = 'simple'  # Can be "memcached", "redis", etc.
    SQLALCHEMY_DATABASE_URI = os.environ.get('QVOTE_DB_URI',
                                             'postgresql://localhost/example')
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class ProdConfig(Config):
    """Production configuration."""

    DEBUG = False


class DevConfig(Config):
    """Development configuration."""

    DEBUG = True
    CACHE_TYPE = 'simple'  # Can be "memcached", "redis", etc.


class TestConfig(Config):
    """Test configuration."""

    TESTING = True
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'sqlite://:memory:'
    # For faster tests; needs at least 4 to avoid "ValueError: Invalid rounds"
    BCRYPT_LOG_ROUNDS = 4

