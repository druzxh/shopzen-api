const ApiController = require("../ApiController")
const User = require("../../models/User");
const { generateCode } = require("../../helpers");

class UserController extends ApiController {
    async getMany(req, res) {
        try {
            const result = await User.find();
            return super.sendResponse(res, 0, "Data retrieved successfully", result)
        } catch (error) {
            return super.sendError(res, 1, "Error", error);
        }
    }
}
module.exports = new UserController()