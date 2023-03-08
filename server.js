//This small CRUD app serves as a template for future Node, Express, MongoDB based projects.

// Create a variable that will require in the Express library
const express = require('express')
// Create an app variable that will allow us  to run express function which we can use to configure our server
const app = express()
// Create app.listen to run a server on port 3000 and console log it
app.listen(3000, ()=> console.log('Server running'))