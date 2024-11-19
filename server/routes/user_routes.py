from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, unset_jwt_cookies
from extensions import db, bcrypt  # Import from extensions
from models import User

# Define Blueprint
user_bp = Blueprint("user_bp", __name__)

# Test route to confirm user_routes is working
@user_bp.route("/test", methods=["GET"])
def test_route():
    return jsonify({"message": "user_routes is working"}), 200


@user_bp.route("/register", methods=["POST"])
def register_user():
    data = request.get_json()

    # Check if user_name or email already exists
    user_exists = User.query.filter_by(user_name=data.get("user_name")).first()  # Changed to user_name
    email_exists = User.query.filter_by(email=data.get("email")).first()

    if user_exists:
        return jsonify({"error": "Username already exists"}), 409
    if email_exists:
        return jsonify({"error": "Email already exists"}), 409

    # Extract and hash the password
    full_name = data.get("full_name")
    user_name = data.get("user_name")  # Changed to user_name
    email = data.get("email")
    password = data.get("password")
    hashed_password = bcrypt.generate_password_hash(password).decode("utf-8")

    # Create and save new user
    new_user = User(

        full_name=full_name,
        user_name=user_name,  # Changed to user_name
        email=email,
        password=hashed_password,
    )
    db.session.add(new_user)
    db.session.commit()

    # Generate access token
    access_token = create_access_token(identity=new_user.user_id)
    return jsonify({"user": new_user.to_json(), "access_token": access_token}), 201


@user_bp.route("/login", methods=["POST"])
def login_user():
    data = request.get_json()
    user_name = data.get("user_name")  # Changed to user_name
    password = data.get("password")

    # Check if the user_name exists
    user = User.query.filter_by(user_name=user_name).first()  # Changed to user_name
    if not user or not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Invalid username or password"}), 401

    # Generate access token upon successful login
    access_token = create_access_token(identity=user.user_id)
    return jsonify({"access_token": access_token, "user_id": user.user_id, "message": "Login successful"}), 200

@user_bp.route("/logout", methods=["POST"])
def logout_user():
    response = jsonify({"message": "Logout successful"})
    unset_jwt_cookies(response)

    return response, 200
