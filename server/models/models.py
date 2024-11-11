from app import db
from datetime import datetime
import json  # Import json module
import base64
class User(db.Model):
    __tablename__ = "users"
    user_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    full_name = db.Column(db.String(100), nullable=False)
    username = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(75), nullable=False)
    created_at = db.Column(db.TIMESTAMP, server_default=db.func.now())

    def to_json(self):
        return {
        "username": self.username,
        "email": self.email,
        "password": self.password,
        "full_name": self.full_name,
        "user_type": self.user_type
        }
