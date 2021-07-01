import './App.css';
import React, { Component, useState, useEffect } from 'react'
import ArticleList from './components/ArticleList'
import Form from './components/Form';


function App() {

  const [articles, setArticles] = useState([])
  const [editedArticle, setEditedArticles] = useState(null)
  var url = 'http://127.0.0.1:5000/api/list'

  useEffect(() => {
    fetch(url).then(response => response.json())
      .then(response => setArticles(response))
      .catch(error => console.log(error))
  }, []);

  const editArticle = (article) => {
    setEditedArticles(article)
  }

  const updatedData = (article) => {
    const new_article = articles.map(dataArticle => {
      if (dataArticle.id === article.id) {
        return article
      } else { return dataArticle}
      
    })
    setArticles(new_article)

  }

  const insertHandler = () => {
    setEditedArticles({title:'', body:''})
  }

  const insertedArticle = (article) => {
    const new_articles = [...articles, article]
    setArticles(new_articles)
  }

  return (
    <div className="App">
      <div className="row">
        <div className="col">
          <h1>this is react app</h1>
        <h2>Now its going to be react and flask app</h2>

        </div>

        <div className="col">
          <button onClick={ insertHandler}
            className="btn btn-success">Insert</button>
        </div>
      
      </div>
      <ArticleList article={articles} editArticle={editArticle} />
      {editedArticle ? (<Form article={editedArticle} updatedData={updatedData} insertedArticle={ insertedArticle}/>):null}
    </div>
  )
}
export default App;
