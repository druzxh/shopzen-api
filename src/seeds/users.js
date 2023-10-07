const mongoose = require('mongoose');
const User = require('../models/Users');
const fakeUsers = require("./fakeUsers")

mongoose.connect('mongodb://127.0.0.1/shopzen')
    .then((result) => {
        console.log('connected to mongodb')
    }).catch((err) => {
        console.log(err)
    });

async function seedUsers() {
    const users = fakeUsers

    try {
        const newUser = await Promise.all(users.map(async user => {
            return {
                ...user
            }
        }))

        await User.deleteMany({});
        await User.insertMany(newUser);
        console.log('Data berhasil disimpan', "\n", JSON.stringify(users));
    } catch (err) {
        console.log('Terjadi kesalahan saat menyimpan data:', err);
    } finally {
        mongoose.disconnect();
    }
}

seedUsers();