const mongoose = require('mongoose')

const MapSchema = mongoose.Schema({
    // Buat Schema data
    displayName: {
        type: String,
        required: true
    },
    coordinates: {
        type: String,
        required: true
    },
    splash: {
        type: String,
        required: true
    },
    miniMap: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Map', MapSchema)