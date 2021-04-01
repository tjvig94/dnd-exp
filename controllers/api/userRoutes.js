const router = require('express').Router();
const { User } = require('../../models');
const passport = require('passport');
const jwt = require('jsonwebtoken')
const passportFile = require('../../config/passport')
const jwtSecret = require('../../config/jwtConfig');
const LocalStrategy = require('passport-local').Strategy;
router.use(passport.initialize());

router.post('/register', (req, res, next) => {
  passport.authenticate('register', (err, user, info) => {
    if (err) {
      console.log(err);
    }
    if (info != undefined) {
      console.log(info.message);
      res.send(info.message);
    } else {
      req.logIn(user, err => {
        const data = {
          name: req.body.name,
          // last_name: req.body.last_name,
          email: req.body.email,
          // username: user.username,
        };
        User.findOne({
          where: {
            email: data.email,
          },
        }).then(user => {
          user
            .update({
              name: data.name,
              // last_name: data.last_name,
              email: data.email,
            })
            .then(() => {
              console.log('user created in db');
              res.status(200).send({ message: 'user created' });
            });
        });
      });
    }
  })
    (req, res, next);
});



router.post('/login', (req, res, next) => {
  passport.authenticate('login', (err, users, info) => {
    if (err) {
      console.error(`error ${err}`);
    }
    if (info !== undefined) {
      console.error(info.message);
      if (info.message === 'incorrect email or password, please try again.') {
        res.status(401).send(info.message);
      } else {
        res.status(403).send(info.message);
      }
    } else {
      req.logIn(users, () => {
        User.findOne({
          where: {
            email: req.body.email,
          },
        }).then(user => {
          const token = jwt.sign({ id: user.id }, jwtSecret.secret, {
            expiresIn: 60 * 60,
          });
          res.status(200).send({
            auth: true,
            token,
            message: 'user found & logged in',
          });
        });
      });
    }
  })(req, res, next);
});


router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;