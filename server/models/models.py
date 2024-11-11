from app import db
from datetime import datetime
import json  # Import json module
import base64
class User(db.Model):
    __tablename__ = "users"
    user_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    full_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.String(128), nullable=False)
    created_at = db.Column(db.TIMESTAMP, server_default=db.func.now())

    # Hash the password and store it in the password field
    def set_password(self, password):
        self.password = bcrypt.generate_password_hash(password).decode('utf-8')

    # Check if the provided password matches the hashed password
    def check_password(self, password):
        return bcrypt.check_password_hash(self.password, password)

    def to_json(self):
        return {
            "username": self.username,
            "email": self.email,
            "full_name": self.full_name,
            "user_id": self.user_id
        }
