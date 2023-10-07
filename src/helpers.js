const moment = require("moment");
const { v4: uuidv4 } = require("uuid");

const generateCode = (varName) => {
    const today = moment().format("YYYYMMDD");
    const randomCode = uuidv4();
    const mathRandom = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
    const code = `${varName}${today}${mathRandom}-${randomCode}`;
    return code;
}

module.exports = { generateCode }