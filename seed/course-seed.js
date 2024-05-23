const db = require('../config/database')
const Course = require('../models/Course')


let newCourses = [

    new Course({
        title: 'Drawing plants',
        artist: 'Mohammed',
        description:' learn ho to draw perfect ',
        location: 'Al-riyadh',
        date: Date.now(),
        
    }),
    new Course({
        title: 'portery class',
        artist: 'Deema',
        description:' learn ho to draw perfect ',
        location: 'Al-riyadh',
        date: Date.now(),
        
    }),
    new Course({
        title: 'Drawing plants',
        artist: 'Mohammed',
        description:' learn ho to draw perfect ',
        location: 'Al-riyadh',
        date: Date.now(),
        
    }),
]
newCourses.forEach((Course)=>{
    Course.save( (err)=> {
    if(!err) {
    console.log('record was added')
    } else {
    console.log(err)
     }
            
    })
})