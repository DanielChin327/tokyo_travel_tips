# config.py
import os
from dotenv import load_dotenv  # Load environment variables from .env

load_dotenv()  # Load all variables from .env file

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "default_secret_key")  # App secret key
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URI", "sqlite:///database.db")  # Database URI
    SQLALCHEMY_TRACK_MODIFICATIONS = False  # Disable modification tracking (improves performance)
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "default_jwt_secret_key")  # Secret key for JWT




def register_routes(app):
    routes_dir = os.path.join(os.path.dirname(__file__), "routes")
    for filename in os.listdir(routes_dir):
        if filename.endswith(".py") and not filename.startswith("__"):
            module_name = f"routes.{filename[:-3]}"
            __import__(module_name)

def register_models(app):
    routes_dir = os.path.join(os.path.dirname(__file__), "models")
    for filename in os.listdir(routes_dir):
        if filename.endswith(".py") and not filename.startswith("__"):
            module_name = f"models.{filename[:-3]}"
            __import__(module_name)
