const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//initialise express
const app = express();

//bodyParser Middleware
app.use(bodyParser.json());

//Db config
const db = require('./config/keys').mongoURI;

//Connect to mongo db
mongoose.connect(db)
.then(() => console.log("Successfully connected to mongodb database"))
.catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
