const ApiController = require("../ApiController")
const User = require("../../models/User");
const { generateCode } = require("../../helpers");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthController extends ApiController {
    async register(req, res) {
        try {
            const user = new User(req.body);
            const saltRounds = 10;
            const plainPassword = req.body.password;
            const hash = await bcrypt.hash(plainPassword, saltRounds);

            user.usersCode = generateCode("USER");
            user.password = hash;

            await user.save()
            return super.sendResponse(res, 1, "Register successfully", user);
        } catch (error) {
            return super.sendError(res, 0, "Register failed", error);
        }

    }

    async login(req, res) {
        try {
            const bcrypt = require('bcrypt');
            const email = req.body.email
            const password = req.body.password;

            const user = await User.findOne({ email });

            if (!user) {
                return super.sendError(res, 0, "User not found");
            }

            const storedHash = user.password;

            const passwordMatch = await bcrypt.compare(password, storedHash);

            if (passwordMatch) {
                const token = jwt.sign({ userId: user._id }, user.usersCode, { expiresIn: '1h' });

                const result = {
                    usersCode: user.usersCode,
                    fullname: user.fullname,
                    email: user.email,
                    emailVerifiedAt: user.emailVerifiedAt,
                    phone: user.phone,
                    isActive: user.isActive,
                    isDelete: user.isDelete,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt,
                    token: token,
                };

                return super.sendResponse(res, 1, "Login successfully", result);
            } else {
                return super.sendError(res, 0, "Incorrect password");
            }

        } catch (error) {
            return super.sendError(res, 1, "Login error", error);
        }
    }
}
module.exports = new AuthController()