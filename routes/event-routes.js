const express = require("express")
const router = express.Router()
const Course = require ('../models/Course')
const { check, validationResult } = require('express-validator/check')
const { error } = require("jquery")
//show the home page 
router.get('/',(req,res)=> {
    res.render('course/index')
})
router.get('/about',(req,res)=> {
    res.render('course/about')
})


router.get('/show',(req,res)=> {
    Course.find({},(err,art)=>{
        let chunk=[]
        let chunksize=3
        for(let i=0;i<Course.length; i+=chunksize){
            chunk.push(art.slice(i,chunksize +i))
        }
       
       res.render('course/show',{
            chunk : chunk,
           message: req.flash('info') 
        })
    })
    
})
//create new coures
router.get('/create',(req,res)=> {
   
    res.render('course/create',{
        errors: req.flash('errors')
    })
})
//save course to db
router.post('/create',[
    check('title').isLength({min: 5}).withMessage('Title should be more than 5 char'),
    check('description').isLength({min: 5}).withMessage('Description should be more than 5 char'),
    check('artist').isLength({min: 2}).withMessage('Artist name should be more the 2 char'),
    check('location').isLength({min: 3}).withMessage('Location should be more than 3 char'),
],(req,res)=> {
    const errors = validationResult(req)
    
    if(!errors.isEmpty() ) { 
        req.flash('errors',errors.array())
        res.redirect('/art/create')
    }else{
        let newCourse = new Course({
            title:req.body.title,
            description:req.body.description,
            artist:req.body.artist,
            location:req.body.location
        })
        newCourse.save((err)=>{
            if(!err){ 
                console.log('event was added')
                req.flash('info','The course was created good luck <3')
                res.redirect('/art/show')
            }else{
                console.log(err)
            }
        }) 
    }
})
    
router.get('/:id',(req,res)=> {
    Course.findOne({_id: req.params.id},(err,Course)=>{
        if(!err){
            res.render('course/lookup',{
                Course:Course
             })}else{
             console.log(err)}
            })   
})


module.exports= router