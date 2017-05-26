const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const User          = require('../user/userModel');
const bcrypt         = require("bcryptjs");


module.exports = function () {

  passport.serializeUser((user, cb) => {
    console.log("SERIALIZE USER");
    cb(null, user._id);
  });

  passport.deserializeUser((id, cb) => {
    console.log("DESESERIALIZE USER");
    User.findOne({ "_id": id }, (err, user) => {
      if (err) { return cb(err); }
      cb(null, user);
    });
  });

  passport.use(new LocalStrategy((username, password, next) => {
    User.findOne({ username }, (err, foundUser) => {
      if (err) {
        next(err);
        return;
      }
      if (!foundUser) {
        next(null, false, { message: 'Incorrect username' });
        return;
      }
      if (!bcrypt.compareSync(password, foundUser.password)) {
        next(null, false, { message: 'Incorrect password' });
        return;
      }

      next(null, foundUser);
    });
  }));
  return passport
};
