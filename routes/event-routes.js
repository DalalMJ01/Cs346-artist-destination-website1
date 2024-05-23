const express = require("express")
const router = express.Router()
const Course = require ('../models/Course')
//show the home page 
router.get('/',(req,res)=> {
    res.render('course/index')
})

router.get('/show',(req,res)=> {
    Course.find({},(err,art)=>{
        let chunk=[]
        let chunksize=3
        for(let i=0;i<Course.length; i+=chunksize){
            chunk.push(art.slice(i,chunksize +i))
        }
       
       res.render('course/show',{
            chunk : chunk
        })
    })
    
})
router.get('/:id',(req,res)=> {
    Course.findOne({_id: req.params.id},(err,Course)=>{
        if(!err){
            res.render('course/lookup',{
                Course:Course
             })}else{
             console.log('sorry')}
            })   
})
module.exports= router