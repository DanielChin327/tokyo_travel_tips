# app.py
from flask import Flask  # Import Flask to create the app
from flask_cors import CORS  # Allow cross-origin requests (useful if frontend is separate)
from flask_sqlalchemy import SQLAlchemy  # ORM for database interaction
from flask_bcrypt import Bcrypt  # For hashing passwords securely
from flask_jwt_extended import JWTManager  # For JWT-based authentication
from config import Config  # Import configuration settings
from routes.users_routes import user_bp  # Import the user routes

# Initialize the app
app = Flask(__name__)
app.config.from_object(Config)  # Load settings from Config class

# Initialize extensions
CORS(app)  # Enable CORS
db = SQLAlchemy(app)  # Initialize SQLAlchemy for database
bcrypt = Bcrypt(app)  # Initialize Bcrypt for password hashing
jwt = JWTManager(app)  # Initialize JWT for secure user authentication

# Register user routes
app.register_blueprint(user_bp)

# Run the app in debug mode
if __name__ == "__main__":
    app.run(debug=True)
