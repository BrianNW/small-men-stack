const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

// GET ALL
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
    }catch (err){
        res.status(500).json({message: err.message})
    }
})

// GET ONE
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})
module.exports = router


// CREATE ONE

router.post('/', (req, res) => {
    
})

// UPDATE ONE
// Use .patch rather than put to update only ONE entry of this subscriber that gets passed, not all the information at once
router.patch('/:id', (req, res) => {
    req.params.id
})


// DELETE ONE

router.delete('/:id', (req, res) => {
    
})