const Sequelize = require('sequelize');
const db = require("../db");

module.exports = db.define('user', {
    username: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING }
});