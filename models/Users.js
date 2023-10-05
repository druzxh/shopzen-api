const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    users_code: String,
    email: String,
    user_type:
        [
            {
                type: String,
                enum: ['member', 'seller'],
                required: true,
            }
        ],
    email_verified_at: Date,
    is_active:
        [
            {
                type: Number,
                enum: [0, 1],
                required: true,
                default: 1
            }
        ],
    is_delete:
        [
            {
                type: Number,
                enum: [0, 1],
                required: true,
                default: 0
            }
        ],
    created_at: Date,
    updated_at: Date,
})

module.exports = mongoose.model('User', userSchema)