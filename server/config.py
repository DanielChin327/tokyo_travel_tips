# config.py
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY")
    SQLALCHEMY_DATABASE_URI = os.getenv("DEV_DATABASE")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True
    CORS_HEADERS = "Content-Type"
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")

def register_routes(app):
    # Path to the routes directory
    routes_dir = os.path.join(os.path.dirname(__file__), "routes")
    for filename in os.listdir(routes_dir):
        if filename.endswith(".py") and not filename.startswith("__"):
            # Import each route file as a module
            module_name = f"routes.{filename[:-3]}"
            module = __import__(module_name, fromlist=['user_bp'])

            # Register the blueprint if it exists in the module
            if hasattr(module, 'user_bp'):
                app.register_blueprint(module.user_bp)

def register_models(app):
    # Path to the models directory
    models_dir = os.path.join(os.path.dirname(__file__), "models")
    for filename in os.listdir(models_dir):
        if filename.endswith(".py") and not filename.startswith("__"):
            # Import each model file as a module
            module_name = f"models.{filename[:-3]}"
            __import__(module_name)
