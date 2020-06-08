const express = require('express');
const multer = require('multer');
const app = express();


const port = (process.env.PORT || 3000);
app.listen(port, ()=> `Server now running on ${port}`)