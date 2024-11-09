# server/config.py
import os
from dotenv import load_dotenv

# Load environment variables from a .env file if it exists
load_dotenv()

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'default_secret_key')
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URI', 'sqlite:///database.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False


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
