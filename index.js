// JavaScript source code
const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://thefrontD:89847692mm@boilerplate.gutss.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
	useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=>console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!~~¾È³çÇÏ¼¼¿ä')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})