from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)


app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://" ":" "@localhost/flaskpost"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)


class Articles(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    body = db.Column(db.Text())
    date = db.Column(db.DateTime, default=datetime.datetime.now)

    def __init__(self, title, body):
        self.title = title
        self.body = body
