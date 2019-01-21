import express from 'express';
import userController from '../controllers/user.controller';
import passport from 'passport';
import LocalStrategy from 'passport-local';

import sequelize from '../../models';

const User = sequelize.models.User;

const router = express.Router(); // eslint-disable-line new-cap

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id).then((user) => {
    done(err, user);
  });
});


passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function (email, password, done) {
    User.findOne({
      where: {
        email: email
      }
    }).then(function (user) {
      if (!user) {
        return done(null, false, {});
      }
      if (user.password == password) {
        return done(null, false, {});
      }
      return done(null, user);
    });
  }
));

router.route('/signin')
  /** post /api/auth/signin - signin */
  .post(userController.signin, passport.authenticate('local-login', {
    failureRedirect: '/'
  }), function (req, res) {
    res.send('login success');
  });

router.route('/signup')
  /** post /api/auth/signup - signup */
  .post(userController.signup);

export default router;