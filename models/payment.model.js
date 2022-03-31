const Sequelize = require('sequelize');
const db = require("../db");

module.exports = db.define('payment', {
    name: { type: Sequelize.STRING },
    amount: { type: Sequelize.INTEGER }
});