import React, { useState, useEffect } from 'react'
import APIServices from './APIServices'

function Form(props) {
     const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    
    useEffect(() => {
        setTitle(props.article.title)
        setBody(props.article.body)

    },[props.article])

    const updatehandler = () => {
        APIServices.fetchHandler(props.article.id, title, body, 'PUT')
        .then(response => props.updatedData(response))
    }

    const insertHandler = () => {
        console.log(title, body)
        APIServices.fetchHandler(null, title, body, 'POST')
            .then(response => props.insertedArticle(response))
            .catch(error => console.log(error))
    }
    return (
        <div>
            { props.article ? 
                (
                    <div className="mb-3">
                        <div className="jumbotron"> 
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" placeholder="your form title" value={title} onChange={((event) => setTitle(event.target.value)) }/>
                       
                        <label htmlFor="body" className="form-label">Body</label>
                            <textarea rows="5" type="text" className="form-control" placeholder="your form Body" value={body} onChange={((event) => setBody(event.target.value))} />
                        </div>

                        <div className="jumbotron"> 
                        
                        {
                            props.article.id ?
                                <button onClick={() => updatehandler()} className="btn btn-success">MakeChanges</button> :
                        <button onClick={() => insertHandler()} className="btn btn-success">Insert</button>        
                        }
                        
                        </div>
                    
                    </div>
                
            ):null } 
            
        </div>
    )
}

export default Form