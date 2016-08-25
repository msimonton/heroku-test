"use strict";
require('dotenv').config();
const express = require('express')
let app = express()
const port = process.env.PORT;



app.get('/', (req, res) =>  {
  console.log(process.env);
  res.send('hello')

})

app.listen(port, () =>  {
  console.log("Server running on port "+port)
})
