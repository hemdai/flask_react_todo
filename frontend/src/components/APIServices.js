import React, { Component } from 'react'

export class APIServices extends Component {
    static fetchHandler(id, title, body, method) {
        var url = 'http://127.0.0.1:5000/api/list'
        if (method === 'POST') {
            url = `http://127.0.0.1:5000/api/create/`
        } else if (method === 'PUT') {
            url = `http://127.0.0.1:5000/api/update/${id}`
        } else if (method === 'DELETE') {
            url = `http://127.0.0.1:5000/api/delete/${id}`
        }
        return fetch(url, {
            'method': method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({title, body})
        }).then(response => response.json())
    }
    
}

export default APIServices
