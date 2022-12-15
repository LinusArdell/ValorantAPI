const express = require('express')
const router = express.Router()
const Map = require('../models/Map')

// Create 
router.post('/', async (req, res) => {
    const mapPost = new Map({
        displayName: req.body.displayName,
        coordinates: req.body.coordinates,
        displayIcon: req.body.displayIcon
    })

    try {
        // simpan data 
        const map = await mapPost.save()
        // response
        res.json(map)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

module.exports = router