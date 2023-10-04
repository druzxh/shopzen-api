const express = require("express");
const router = express.Router();
const ApiController = require("../controller/ApiController");
const users = require("../seeds/fakeUsers");

router.get("/", (req, res) => {
    ApiController.sendResponse(res, 1, "Data retrivied successfully", users, 200);
});

module.exports = router;
