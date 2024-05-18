const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// importing multer for image upload
// const multer  = require('multer')

// const storage = multer.diskStorage({
//     // cb = callback function (don't know what that means yet.)
//     destination: function (req, file, cb) {
//         // takes two arguments : 1) error handling mechanism, 2) destination for the file
//         cb(null, '../../uploads')
//     }, 
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now()
//       cb(null, uniqueSuffix + file.originalname)
//     }
//   })
  
// const upload = multer({ storage: storage })

const routes = require('./src/routes/testimoial-routes')

// contains MongoDB address
require('dotenv').config();

// express is a framework used specifically for web development
const app = express();
const PORT = process.env.port || 5000

app.use(express.json());
app.use(cors());

// confiuring mongoose
mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=>console.log(`Connected to MongoDB....`))
    .catch((err)=>console.log(err));

app.use(routes)

// defining the port on which the server will run.
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))