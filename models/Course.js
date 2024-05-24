const mongoose = require('mongoose')
const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: false
    },
   
   
})

let Course = mongoose.model('Course', courseSchema, 'CourseDB')

module.exports = Course