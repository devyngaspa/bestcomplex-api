const BaseController = require('./base')

class UsersController extends BaseController {

  profile () {
    this.response.render('profile', { user: this.request.user });
  }

}

module.exports = UsersController;
