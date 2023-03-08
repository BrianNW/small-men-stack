//This small CRUD app serves as a template for future Node, Express, MongoDB based projects.

// Load all environment variables from the .env file
require('dotenv').config()
// Create a variable that will require in the Express library
const express = require('express')
// Create an app variable that will allow us  to run express function which we can use to configure our server
const app = express()
// Require in Mongoose for our db
const mongoose = require('mongoose')

// Connect to our db
mongoose.connect('process.env.DATABASE_URL', {useNewUrlParser: true})
const db = mongoose.connection
// Once db is on, check for error and log it
db.on('error', (error) => console.error(error))
// once we connect (only run once), let us know that we're connected to the database
db.once('open', ()=> console.log('Connected to database'))

// Create app.listen to run a server on port 3000 and console log it
app.listen(3000, ()=> console.log('Server running'))
//run > npm run devStart to run this server