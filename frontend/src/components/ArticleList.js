import React from 'react'
import APIServices from './APIServices'

export default function ArticleList(props) {
    const editArticle = (article) => {
        props.editArticle(article)
    }

    const deleteArticle = (article) => {
        APIServices.fetchHandler(article.id, null, null, 'DELETE')
    }
    return (
        <div>
            {props.article && props.article.map(article => {
                return (
                    <div key={article.id}>
                        <h1>{article.title}</h1>
                        <p>{article.body}</p>
                        <p>{article.date}</p>

                        <div className="row">
                            <div className="col-md-1">
                                <button onClick={ ()=> editArticle(article)} className="btn btn-primary">Update</button>
                            </div>
                            <div className="col">
                                <button onClick={ () => deleteArticle(article)} className="btn btn-danger">Delete</button>
                            </div>

                        </div>
                        

                    </div>
                )
            })}
        </div>
    )
}
