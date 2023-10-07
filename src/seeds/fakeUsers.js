const { generateCode } = require("../helpers")

const fakeUsers = [
    { name: "John", usersCode: generateCode("USR"), userType: "member", email: "John@gmail.com", emailVerifiedAt: "", isActive: 1, isDelete: 0 },
    { name: "Mark", usersCode: generateCode("USR"), userType: "member", email: "Jane@gmail.com", emailVerifiedAt: "", isActive: 1, isDelete: 0 },
    { name: "Gill", usersCode: generateCode("USR"), userType: "member", email: "Gill@gmail.com", emailVerifiedAt: "", isActive: 1, isDelete: 0 },
    { name: "Bram", usersCode: generateCode("USR"), userType: "seller", email: "Bram@gmail.com", emailVerifiedAt: "", isActive: 1, isDelete: 0, sellerVerified: 1 },
    { name: "Lucas", usersCode: generateCode("USR"), userType: "seller", email: "Lucas@gmail.com", emailVerifiedAt: "", isActive: 1, isDelete: 0, sellerVerified: 0 }
]

module.exports = fakeUsers;