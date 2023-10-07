const express = require("express");
const mongoose = require('mongoose')
require('dotenv').config()
const bodyParser = require('body-parser');

const usersRoutes = require("./src/routes/users")
const authRoutes = require("./src/routes/auth")

mongoose.connect('mongodb://127.0.0.1/shopzen')
    .then((result) => {
        console.log('connected to mongodb')
    }).catch((err) => {
        console.log(err)
    });
const app = express();
const port = process.env.PORT || 3001;
const api = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", api);

// Auth
api.use("/", authRoutes)
// User
api.use("/users", usersRoutes);

app.listen(port, () => {
    console.log("Server Listening on PORT:", port);
});
