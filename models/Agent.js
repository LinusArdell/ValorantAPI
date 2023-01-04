// (4) Buat Schema Mahasiswa
const mongoose = require('mongoose')

const AgentSchema = mongoose.Schema({
    // Buat Schema Agent
    displayName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    displayIcon: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Agent', AgentSchema)