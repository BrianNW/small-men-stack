const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

// GET ALL
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    }catch (err){
        res.status(500).json({message: err.message})
    }
})

// GET ONE
router.get('/:id', getSubscriber, (req, res) => {
    res.send(res.subscriber)
})
module.exports = router


// CREATE ONE
router.post('/', async (req, res) => {
    // pass a new Subscriber json data to subscriber
    const subscriber = new Subscriber ({
        // name will come from the name propert of the body request
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })    

    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    }catch (err) {
        res.status(400).json({message: err.message})
    }
})

// UPDATE ONE
// Use .patch rather than put to update only ONE entry of this subscriber that gets passed, not all the information at once
router.patch('/:id', getSubscriber, (req, res) => {
    if(req.body.name != null) {
        res.subscriber.name = req.body.name
    }
})


// DELETE ONE
router.delete('/:id', getSubscriber, async (req, res) => {
    try {
        await res.subscriber.deleteOne() 
        res.json({message: 'Deleted Subscriber'})
    }catch(err) {
        res.status(500).json({message: err.message })
    }
})

// middleware. Next argument will move onto next section of the code
async function getSubscriber(req, res, next){
    let subscriber
    try {
        // give this the subscriber id
        subscriber = await Subscriber.findById(req.params.id)
        // check if exists
        if(subscriber == null) {
            // can't find subscriber
            return res.status(404).json({message: 'Cannot find subscriber'})
        }
    }catch(err) {
        return res.status(500).json({message:err.message})
    }
    // set response to subscriber
    res.subscriber = subscriber
    // if successful, run next() to run to the next piece of middleware
    next()
}


