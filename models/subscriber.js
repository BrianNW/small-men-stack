const mongoose = require ('mongoose')

const subscriberSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    subscribedToChannel :{
        type: String,
        required: true
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

// Takes two properties - name of the model of the db & schema for that model
module.exports = mongoose.model('Subscriber', subscriberSchema)