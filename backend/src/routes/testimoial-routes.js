const {Router} = require("express");
const { getTestimonial, saveTestimonial, saveTestimonialPhoto } = require("../controllers/testimonial-controller");

const multer = require("multer");
const storage = multer.diskStorage({
    // cb = callback function (don't know what that means yet.)
    // I now know what a callback function is. But not sure how it's being used here. We haven't defined cb anywhere. I suspect it is something defined in multer.
    destination: function (req, file, cb) {
        // takes two arguments : 1) error handling mechanism, 2) destination for the file
        cb(null, 'uploads/')
    }, 
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null, uniqueSuffix + file.originalname)
    }
  })

const upload = multer({ storage: storage })

const router = Router()

router.get('/', getTestimonial)
router.post('/save', saveTestimonial)
router.post('/upload-image', upload.single('image'), saveTestimonialPhoto)

module.exports = router;