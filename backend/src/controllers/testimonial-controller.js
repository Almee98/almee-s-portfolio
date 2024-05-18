const { default: mongoose } = require('mongoose')
const TestimonialModel = require('../models/testimonial-model')
// const ImageDetails = require('../models/image-details')
// const multer = require('multer')
// const upload = multer({dest : '../../uploads'})

module.exports.getTestimonial = async (req, res) => {
    const testimonial = await TestimonialModel.find()
    res.send(testimonial)
}

module.exports.saveTestimonial = async (req, res) => {

    try {
        // Extract data from request body
        const { firstName, lastName, title, desc } = req.body;

        // Create new testimonial document
        const newTestimonial = new TestimonialModel({
            firstName,
            lastName,
            title,
            desc
        });

        // Save testimonial to the database
        await newTestimonial.save();

        // Send success response
        res.status(201).send('Testimonial saved successfully');
    } catch (error) {
        // Handle errors
        console.error('Error saving testimonial:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports.saveTestimonialPhoto = async (req, res) => {
    try {
        console.log(req.body);
        res.send("uploaded!")
    }
    catch {
        console.error();
    }
    
}