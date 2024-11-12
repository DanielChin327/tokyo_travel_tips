from extensions import db  # Import db from extensions
from datetime import datetime


class User(db.Model):
    __tablename__ = "users"
    user_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    full_name = db.Column(db.String(100), nullable=False)
    user_name = db.Column(db.String(50), nullable=False, unique=True)  # Changed to user_name
    email = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.String(75), nullable=False)
    created_at = db.Column(db.TIMESTAMP, default=datetime.utcnow, nullable=False)

    def to_json(self):
        return {
            "user_id": self.user_id,
            "full_name": self.full_name,
            "user_name": self.user_name,  # Updated to match the database field
            "email": self.email,
            "created_at": self.created_at.isoformat()
        }
