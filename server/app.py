# server/app.py
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to Tokyo Travel Tips!"

if __name__ == "__main__":
    app.run(debug=True)
