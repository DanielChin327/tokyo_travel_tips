# routes/users_routes.py
from app import app, bcrypt
from flask import Blueprint, request, jsonify
from models import db, User
from flask_jwt_extended import create_access_token, unset_jwt_cookies
from models.models import db, User

@app.route("/register", methods=["POST"])
def register_user():
    data = request.get_json()

    # Check if username or email already exists
    user_exists = User.query.filter_by(username=data.get("username")).first()
    email_exists = User.query.filster_by(email=data.get("email")).first()
    if user_exists:
        return jsonify({"error": "Username already exists"}), 409
    if email_exists:
        return jsonify({"error": "Email already exists"}), 409

    # Get user input
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")
    full_name = data.get("full_name")

    # Hash the password
    hashed_password = bcrypt.generate_password_hash(password).decode("utf-8")

    # Create a new user object
    new_user = User(
        full_name=full_name,
        user_name=user_name,
        email=email,
        password=password,
    )

db.session.add(new_user)
db.session.commit()

access_token = create_access_token(identity=new_user.user_id)
