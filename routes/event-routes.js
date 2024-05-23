const express = require("express")
const router = express.Router()

//show the home page 
router.get('/',(req,res)=> {
    res.render('course/index')
})

router.get('/:id',(req,res)=> {
    res.render('course/show')
})
module.exports= router