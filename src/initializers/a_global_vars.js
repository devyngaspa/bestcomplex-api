fs             = require('fs')
passport       = require('passport')
GoogleStrategy = require('passport-google-oauth20')
twitchStrategy = require('passport-twitch').Strategy
mongoose       = require('mongoose')
session        = require('cookie-session')

bchelp         = require('../helpers/base')
User           = require('../models/user')

SRCPATH        = './src'

module.exports = {

  initialize: () => {
    return;
  }

}
