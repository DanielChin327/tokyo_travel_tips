# routes/users_routes.py
from app import app, bcrypt
from flask import Blueprint, request, jsonify
from models import db, User
from flask_jwt_extended import create_access_token, unset_jwt_cookies
from models.models import db, User

user_bp = Blueprint('user', __name__, url_prefix='/user')

@user_bp.route('/test', methods=['GET'])
def test():
    return jsonify({"message": "User route is working!"})

@app.route("/register", methods=["POST"])
def register_user():
    data = request.get_json()

    # Check if username or email already exists
    if User.query.filter_by(username=data.get("username")).first():
        return jsonify({"error": "Username already exists"}), 409
    if User.query.filter_by(email=data.get("email")).first():
        return jsonify({"error": "Email already exists"}), 409

    # Create a new user object
    new_user = User(
        username=data.get("username"),
        email=data.get("email"),
        full_name=data.get("full_name")
    )

    # Use set_password method in the model to hash the password
    new_user.set_password(data.get("password"))

    # Add the new user to the database
    db.session.add(new_user)
    db.session.commit()

    # Generate an access token for the new user
    access_token = create_access_token(identity=new_user.user_id)

    return jsonify({"user": new_user.to_json(), "access_token": access_token}), 201


@app.route("/login", methods=["POST"])
def login_user():
    data = request.get_json()
    user = User.query.filter_by(username=data.get("username")).first()

    # Check if user exists and if password is correct
    if not user or not user.check_password(data.get("password")):
        return jsonify({"error": "Invalid username or password"}), 401

    # Generate access token upon successful login
    access_token = create_access_token(identity=user.user_id)

    return jsonify({"access_token": access_token, "full_name": user.full_name, "message": "Login successful"}), 200
