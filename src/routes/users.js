const express = require("express");
const router = express.Router();
const UserController = require("../controller/Api/UserController");

router.get("/", (req, res) => {
    UserController.getMany(req, res);
});

module.exports = router;
