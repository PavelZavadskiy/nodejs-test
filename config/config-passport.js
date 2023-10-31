const passport = require('passport');
const passportJWT = require('passport-jwt');
const user = require('../constants/user');
require('dotenv').config();
const secret = process.env.SECRET;

const ExtractJWT = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;
const params = {
  secretOrKey: secret,
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
};

// JWT Strategy
passport.use(
  new Strategy(params, function (payload, done) {
    if (payload.id === user.id) return done(new Error('User not found'));
    return done(null, user);
  })
);
