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
    },
    
    // First Slot Abilty
    firstAbilityName: {
        type: String,
        required: true
    },
    firstAbilityDescription:{
        type: String,
        required: true
    },
    firstAbilityIcon: {
        type: String,
        required: true
    },
        
    // Second Slot ability
    secondAbilityName: {
        type: String,
        required: true
    },
    secondAbilityDescription:{
        type: String,
        required: true
    },
    secondAbilityIcon: {
        type: String,
        required: true
    },
        
    // Third ability
    thirdAbilityName: {
        type: String,
        required: true
    },
    thirdAbilityDescription:{
        type: String,
        required: true
    },
    thirdAbilityIcon: {
        type: String,
        required: true
    },
        
    // Ultimate
    ultimate: {
        type: String,
        required: true
    },
    ultimateDescription: {
        type: String,
        required: true
    },
    ultimateIcon: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Agent', AgentSchema)