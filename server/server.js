const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//Custom 
const routes = require('./router/routes');

const port = process.env.PORT;

// initialze express Object
const app = express();

console.log(path.join(__dirname, "../client/public"));
app.use(express.static(path.join(__dirname, "../client"))); 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({'extended':'true'})); 
// parse application/json
app.use(bodyParser.json());

//Routes
app.use(routes);


app.listen(port, function(){
	console.log(`Server is running on port ${port}`);
})