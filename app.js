const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/') // File storage destination
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname) // Use original file name
    }
})

// Multer instance
const upload = multer({ storage: storage });


// Handle file upload
app.post('/upload', upload.single('file'), (req, res, next) => {
    const file = req.file;
    if (!file) {
        const error = new Error('Please upload a file');
        error.httpStatusCode = 400;
        return next(error);
    }
    res.send('File uploaded successfully');
    
    // save the data into database here

    console.log(req.body.name)
    console.log(req.body.age) 
    // get the file path

});

// Set up server to listen on port 3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});