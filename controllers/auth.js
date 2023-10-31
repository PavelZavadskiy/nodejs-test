const passport = require('passport');

const isAuthorized = (req, res, next) => {
  console.log('isAuthorized');
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (!user || err) {
      return res.status(401).json({
        status: 'error',
        code: 401,
        message: 'Unauthorized',
        data: 'Unauthorized',
      });
    }
    req.user = user;
    next();
  })(req, res, next);
};

module.exports = {
  isAuthorized,
};
