const moment = require("moment")
const users = [
    {name: "John", users_code: "USERS12345678", user_type: "member", email: "John@gmail.com", email_verified_at: "", is_active: 1, created_at: moment().format('YYYY-MM-DD, hh:mm:ss'), updated_at: moment().format('YYYY-MM-DD, hh:mm:ss'), is_delete: 0},
    {name: "Jane", users_code: "USERS22345678", user_type: "member", email: "Jane@gmail.com", email_verified_at: "", is_active: 1, created_at: moment().format('YYYY-MM-DD, hh:mm:ss'), updated_at: moment().format('YYYY-MM-DD, hh:mm:ss'), is_delete: 0},
    {name: "Gill", users_code: "USERS32345678", user_type: "member", email: "Gill@gmail.com", email_verified_at: "", is_active: 1, created_at: moment().format('YYYY-MM-DD, hh:mm:ss'), updated_at: moment().format('YYYY-MM-DD, hh:mm:ss'), is_delete: 0},
    {name: "Bram", users_code: "USERS42345678", user_type: "seller", email: "Bram@gmail.com", email_verified_at: "", is_active: 1, created_at: moment().format('YYYY-MM-DD, hh:mm:ss'), updated_at: moment().format('YYYY-MM-DD, hh:mm:ss'), is_delete: 0, seller_verified: 1},
    {name: "Lucas", users_code: "USERS52345678", user_type: "seller", email: "Lucas@gmail.com", email_verified_at: "", is_active: 1, created_at: moment().format('YYYY-MM-DD, hh:mm:ss'), updated_at: moment().format('YYYY-MM-DD, hh:mm:ss'), is_delete: 0, seller_verified: 0}
]

module.exports = users;