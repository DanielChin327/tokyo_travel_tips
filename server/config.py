import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY")
    SQLALCHEMY_DATABASE_URI = os.getenv("DEV_DATABASE")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True
    CORS_HEADERS = "Content-Type"
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")

def register_routes(app):
    from routes.user_routes import user_bp  # Import the user Blueprint here
    app.register_blueprint(user_bp, url_prefix='/user')  # Register under '/api/user' prefix
