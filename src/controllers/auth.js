const BaseController = require('./base')

class AuthController extends BaseController {

  google () {
  }

  twitch () {
  }

  redirect () {
    this.response.redirect('/users/profile')
  }

}

module.exports = AuthController;
