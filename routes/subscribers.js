const express = require('express')
const router = express.Router()

// Getting all
router.get('/', (req, res) => {
    res.send('Hello World')
})

// Getting one
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})
module.exports = router


// Creating one

router.post('/', (req, res) => {
    
})

// Updating one
// Use .patch rather than put to update only ONE entry of this subscriber that gets passed, not all the information at once
router.patch('/:id', (req, res) => {
    req.params.id
})


// Delete One

router.delete('/:id', (req, res) => {
    
})