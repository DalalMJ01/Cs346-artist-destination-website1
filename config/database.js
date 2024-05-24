const mongoose =require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/CourseDB',{ useNewUrlParser: true },(err)=>{
    if (err){
        console.log(err)
    }else{
        console.log('connect to db succesfully')
    }
})