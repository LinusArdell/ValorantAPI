// (5) Buat router Mahasiswa
const express = require('express')
const router = express.Router()
const Agent = require('../models/Agent')

// Create 
router.post('/', async (req, res) => {
    // tampung input mahasiswa 
    const agentPost = new Agent({
        displayName: req.body.displayName,
        description: req.body.description,
        displayIcon: req.body.displayIcon
    })

    try {
        // simpan data 
        const agent = await agentPost.save()
        // response
        res.json(agent)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

router.get('/', async (req, res) => {
    try {
        const agent = await Agent.find()
        res.json(agent)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

module.exports = router