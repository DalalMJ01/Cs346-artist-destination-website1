const express = require("express")
const app = express()
const db =require('./config/database')
const bodyparser =require('body-parser')
const session = require('express-session')
const flash = require('connect-flash')

//ejs tamplete
app.set('view engine','ejs')
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

//bring static
app.use(express.static('public'))
app.use(express.static('images'))
app.use(express.static('node_modules'))
// session and flash config .
app.use(session({
    secret: 'lorem ipsum',
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 60000 * 15}
}))
app.use(flash())
app.get('/', (req,res)=> {

    res.send("it is working")
 })

 
 // bring events routes
 const art = require('./routes/event-routes')
 app.use('/art', art)

 // listen to port 3002
app.listen(3002, ()=> {

    console.log(' app is wokring on port 3002')
})