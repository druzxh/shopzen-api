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
    },
    sellerVerified: {
        type: Number,
        default: 0,
    },
},
    {
        timestamps: true,
    })
module.exports = mongoose.model('User', userSchema)