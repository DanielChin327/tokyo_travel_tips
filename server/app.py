from flask import Flask
from flask_cors import CORS # To handle things from the Front End
from flask_sqlalchemy import SQLAlchemy
from config import Config, register_routes
from extensions import db, bcrypt, jwt  # Import extensions

# Initialize the Flask app
app = Flask(__name__)
app.config.from_object(Config)

# Enable CORS, bcrypt for password hashing, and JWT for authentication
CORS(app)
db.init_app(app)
bcrypt.init_app(app)
jwt.init_app(app)

# Register Blueprints (modular routes)
register_routes(app)


@app.route("/")
def testing():
    return "flask app is running"

# Apply CORS headers to all responses
@app.after_request
def apply_cors(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type,Authorization"
    response.headers["Access-Control-Allow-Methods"] = "GET,POST,OPTIONS,PUT,DELETE"
    return response

if __name__ == "__main__":
    app.run(debug=True)
