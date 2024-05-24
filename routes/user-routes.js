const express = require("express")
const router = express.Router()
const User = require ('../models/User')

//login form user
router.get('/login',(req,res)=> {
    res.render('user/login')
})
//login req
router.post('/login',(req,res)=> {
    res.render('user/login')
})
//signup form user
router.get('/signup',(req,res)=> {
    res.render('user/signup')
})
//sign up form
router.post('/signup',(req,res)=> {
    console.log(req.body)
    res.json('sinup')
    res.render('user/signup')
})
//profile futer work
router.get('/profile',(req,res)=> {
    res.render('user/profile')
})
//logout 
router.get('/logout',(req,res)=> {
    res.json('logout')
})

//middelware 
module.exports= router
