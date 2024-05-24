const express = require("express")
const router = express.Router()
const User = require ('../models/User')
const passport = require('passport')

//login form user
router.get('/login',(req,res)=> {
    res.render('user/login',{
        error:req.flash('error')
    })
})
//login req
router.post('/login',
  passport.authenticate('local.login', {
    successRedirect: '/users/profile',
      failureRedirect: '/users/login',
      failureFlash: true })
      )
//signup form user
router.get('/signup',(req,res)=> {
    res.render('user/signup',{
        error:req.flash('error')
    })
})
//sign up form
router.post('/signup',
  passport.authenticate('local.signup', {
    successRedirect: '/users/profile',
      failureRedirect: '/users/signup',
      failureFlash: true })
      )
//profile futer work
router.get('/profile',(req,res)=> {
    res.render('user/profile',{
        success:req.flash('success')
    })
})
//logout 
router.get('/logout',(req,res)=> {
    res.json('logout')
})
 
//middelware 
module.exports= router
