var express         = require('express');
var router          = express.Router();
var UsersController = require('../controllers/users');

router.get('/profile', (request, response, next) => {
  let controller = new UsersController(request, response, next);
  controller.profile();
});

module.exports = { path: '/users', router };
