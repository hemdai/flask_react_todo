from flask import Flask, jsonify, request
from models import db, app
from models import Articles
from serializer import article_schema, articles_schema
from flask_cors import CORS


cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route("/api/list", methods=["GET"])
def get_articles():
    all_articles = Articles.query.all()
    results = articles_schema.dump(all_articles)
    return jsonify(results)


@app.route("/api/details/<id>/", methods=["GET"])
def get_articles_details(id):
    article = Articles.query.get(id)
    results = article_schema.dump(article)
    return jsonify(results)


@app.route("/api/create/", methods=["POST"])
def post_articles():
    title = request.json["title"]
    body = request.json["body"]

    articles = Articles(title, body)
    db.session.add(articles)
    db.session.commit()
    return article_schema.jsonify(articles)


@app.route("/api/update/<id>", methods=["PUT"])
def update_articles(id):
    article = Articles.query.get(id)
    title = request.json["title"]
    body = request.json["body"]

    article.title = title
    article.body = body
    db.session.commit()

    return article_schema.jsonify(article)


@app.route("/api/delete/<id>", methods=["DELETE"])
def delete_articles(id):
    article = Articles.query.get(id)
    db.session.delete(article)
    db.session.commit()
    return article_schema.jsonify(article)


if __name__ == "__main__":
    app.run(debug=True)
