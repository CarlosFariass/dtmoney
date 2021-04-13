import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },


seeds(server)  {
  server.db.loadData({
    transactions: [
      {
        id: 1,
        title: 'Front-end website',
        type: 'deposit',
        category: 'dev',
        amount: 6000,
        createdAt: new Date('2021-04-04 20:00:12'),
      },
      {
        id: 2,
        title: 'Front-end mobile app',
        type: 'withdraw',
        category: 'Uepa',
        amount: 90900,
        createdAt: new Date('2021-04-04 20:20:12'),
      }
    ]
  })
},

  routes() {
    this.namespace = 'api';

    this.get('/transactions' , () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions' , (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction' , data)
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);