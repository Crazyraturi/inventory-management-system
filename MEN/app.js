const express = require('express');
const morgan = require('morgan');
const app = express();
const userModel = require('./models/user');
const dbConnection = require('./config/db'); 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

app.set('view engine', 'ejs')

app.use(morgan('dev'))


app.get('/register', (req, res) => {
    express.response('register')
})



app.get('/',(req, res) => {
    res.render('index')
})


app.get('/about', (req, res) => {
    res.send('this is about page')
})

app.get('/profile', (req, res) => {
    res.send('this is your profile page')
})

app.post('/get-form-data', (req, res) => {
    console.log(req.body);
    res.send('data received')
    
})

app.listen(3000)
