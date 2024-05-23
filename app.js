const express = require("express")
const app = express()
const db =require('./config/database')

//ejs tamplete
app.set('view engine','ejs')
//bring static
app.use(express.static('public'))
app.use(express.static('images'))
app.use(express.static('node_modules'))

app.get('/', (req,res)=> {

    res.send(" it is working")
 })

 
 // bring events routes
 const art = require('./routes/event-routes')
 app.use('/art', art)


 // listen to port 3002
app.listen(3002, ()=> {

    console.log(' app is wokring on port 3002')
})