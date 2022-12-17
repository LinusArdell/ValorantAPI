const express = require('express')
const Agent = require('../models/Agent')
const router = express.Router()
const Map = require('../models/Map')

// Create 
router.post('/', async (req, res) => {
    const mapPost = new Map({
        displayName: req.body.displayName,
        coordinates: req.body.coordinates,
        splash: req.body.splash
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

router.get('/', async (req, res) => {
    try {
        const map = await Map.find()
        res.json(map)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

module.exports = router