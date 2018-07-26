const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const pc = require ('./controller/products_controller')

const app = express();
app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
})

app.post('/api/product/', pc.create)
app.get('/api/products', pc.getAll);
app.get('/api/product/:id', pc.getOne);
app.put('/api/product/:id?desc=updated', pc.update)
app.delete('/api/product/:id', pc.delete)


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Running on Port: ", port)
})