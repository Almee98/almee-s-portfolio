const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    firstName : {
        type: String,
        require: true
    },
    lastName : {
        type: String,
        require: true
    },
    title : {
        type: String,
        require: true
    },
    desc : {
        type: String,
        require: true
    },
    image : {
        type: String
    }
})

module.exports = mongoose.model('Testimonial', testimonialSchema)