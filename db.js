const Sequelize = require('sequelize');

module.exports = new Sequelize('mydatabase', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql',
    define: {
        timestamps: false,
        freezeTableName: true
    }
});