const secrets = require('../config/secrets')

module.exports = {

  initialize: () => {

    passport.serializeUser((user, done) => {
      done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
      User.findById(id).then( (user) => {
        done(null, user);
      });
    });

    passport.use(
      new GoogleStrategy({
        callbackURL:  '/auth/google/redirect',
        clientID:     secrets.google.clientID,
        clientSecret: secrets.google.clientSecret
      }, (accessToken, refreshToken, profile, done) => {
        let username  = profile.displayName;
        let google_id = profile.id;
        bchelp.model.find_or_create(User, { google_id }).then( (user) => {
          user.username = username;
          user.save().then( () => {
            done(null, user);
          });
        },
        (error) => {
          console.log("err", error);
        });
      })
    );

    passport.use(
      new twitchStrategy({
        callbackURL:  '/auth/twitch/redirect',
        clientID:     secrets.twitch.clientID,
        clientSecret: secrets.twitch.clientSecret,
        scope:        'user_read'
      }, (accessToken, refreshToken, profile, done) => {
        let twitch_id = profile.id;
        bchelp.model.find_or_create(User, { twitch_id }).then( (user) => {
          user.save().then( () => {
            done(null, user);
          });
        },
        (error) => {
          console.log("err", error);
        });
      })
    );
  }
}
