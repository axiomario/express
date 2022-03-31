var express = require('express');
const userModel = require('../models/user.model');
var router = express.Router();
const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const JWT = require('../jwt');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res) {
  userModel.findOne({
    where: {
      username: { [Op.eq]: req.body.username }
    }
  }).then(data => {
    if (!data) res.status(404).send('Usuario o contraseña incorrectos');
    else {
      bcrypt.compare(req.body.password, data.password, (error, check) => {
        if (check) {
          var token = JWT.createToken(data);

          res.status(200).send({ token });
        } else res.status(404).send('Usuario o contraseña incorrectos');
      });
    }
  });
});

module.exports = router;
