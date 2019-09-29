const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const usersRoute = require('./route/users.route');


//Add mongodb
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todos', { useNewUrlParser: true })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//use template engine pug
app.set('view engine', 'pug');


// Main Page
app.get('/', (req, res) => {
  res.render('../views/index.pug')
});
app.use('/users', usersRoute);

//connect server
app.listen(PORT, () => { console.log(`App is listening on Port:${PORT}`) })