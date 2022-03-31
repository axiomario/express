var express = require('express');
var router = express.Router();
const db = require('../db');
const paymentModel = require('../models/payment.model');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/list', function(req, res) {
    db.query(`
        SELECT *
        FROM payment
    `, {
        type: db.QueryTypes.SELECT
    }).then(list => {
        res.status(200).send(list);
    })
});

router.post('/add', (req, res) => {
    const { name, amount } = req.body;

    paymentModel.create({ name, amount }).then(item => {
        res.status(201).send(item);
    });
});

router.delete('/:id', (req, res) => {
    paymentModel.destroy({
        where: {
            id: { [Op.eq]: req.params.id }
        }
    }).then(() => {
        res.status(204).send();
    });
});

module.exports = router;