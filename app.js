const express = require("express");
require('dotenv').config()
const usersRoutes = require("./routes/users")

const app = express();
const port = process.env.PORT || 8000;
const api = express.Router();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1", api);

// User Routes
api.use("/users", usersRoutes);

app.listen(port, () => {
    console.log("Server Listening on PORT:", port);
});
