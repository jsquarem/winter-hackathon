require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const favicon = require('serve-favicon');

require('./config/database');

// Require controllers here

const app = express();

// add in when the app is ready to be deployed
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(
  fileUpload({
    createParentPath:true,
  })
)

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build'))); // this allows express to find the build folder
// Configure the auth middleware
// This decodes the jwt token, and assigns
// the user information to req.user
// app.use(require('./config/auth'));
// api routes must be before the "catch all" route
app.use('/api/products', require('./routes/api/products'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/teachers', require('./routes/api/teachers'));
app.use('/api/schools', require('./routes/api/schools'));
app.use('/api/projects', require('./routes/api/projects'));

// "catch all" route
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.post("/upload-file", async(req, res)=>{
  try{
    if(!req.files){
      res.send({
        status: "failed",
        message: "No file uploaded"
      })

    }
    else {
      let file = req.files.file;
      console.log(req.files)
     
      file.mv ("./uploads/" + file.name)
      res.send ({
        status: "success",
        message: "File is uploaded",
        data: {
          name: file.name,
          mimetype: file.mimetype,
          size: file.size,
        },
      })
    }
  }
  catch (err){
    res.status(500).send(err)
  }
})

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app listening on port ${port}`);
});
