const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    fullname: String,
    usersCode: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        unique: true
    },
    emailVerifiedAt: Date,
    isActive: {
        type: Number,
        enum: [0, 1],
        required: true,
        default: 1
    },
    isDelete: {
        type: Number,
        enum: [0, 1],
        required: true,
        default: 0
    }
},
    {
        timestamps: true,
    })

module.exports = mongoose.model('User', userSchema)