from flask_marshmallow import Marshmallow
from models import app, Articles

ma = Marshmallow(app)


class ArticleSchema(ma.Schema):
    class Meta:
        fields = ("id", "title", "body", "date")


article_schema = ArticleSchema()
articles_schema = ArticleSchema(many=True)
