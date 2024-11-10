# server/__init__.py
from flask import Flask
from .config import Config, register_routes, register_models
from .models import db

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Initialize database and other extensions
    db.init_app(app)

    # Register routes and models
    register_routes(app)
    register_models(app)

    return app
