
const bcrypt = require('bcrypt');
const Sequelize = require('sequelize')
const jwtSecret = require('./jwtConfig')
const passportJWT = require('passport')

const BCRYPT_SALT_ROUNDS = 12;
const Op = Sequelize.Op;

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const { User } = require('../models');

passport.use(
    'register',
    new LocalStrategy(
        {
            usernameField: 'name',
            passwordField: 'password',
            passReqToCallback: true,
            session: false,
        },
        (req, name, password, done) => {
            console.log(name);
            console.log(req.body.email);

            try {
                User.findOne({
                    where: {
                        [Op.or]: [
                            {
                                name,
                            },
                            { email: req.body.email },
                        ],
                    },
                }).then(user => {
                    if (user != null) {
                        console.log('username or email already taken');
                        return done(null, false, {
                            message: 'username or email already taken',
                        });
                    }
                    bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then(hashedPassword => {
                        User.create({
                            name,
                            password: hashedPassword,
                            email: req.body.email,
                        }).then(user => {
                            console.log('user created');
                            return done(null, user);
                        });
                    });
                });
            } catch (err) {
                res.status(400).json(err)
                return done(err);
            }
        },
    ),
);

passport.use(
    'login',
    new LocalStrategy(
        {
            usernameField: 'email',
            emailField: 'email',
            passwordField: 'password',
            session: false,
        },
        (email, password, done) => {
            try {
                User.findOne({
                    where: {
                        email,
                    },
                }).then(user => {
                    if (user === null) {
                        return done(null, false, { message: 'bad username' });
                    }
                    bcrypt.compare(password, user.password).then(response => {
                        if (response !== true) {
                            console.log('password or email do not match');
                            return done(null, false, { message: 'password or email do not match' });
                        }
                        console.log('user found & authenticated');
                        return done(null, user);
                    });
                });
            } catch (err) {
                done(err);
            }
        },
    ),
);

const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
    secretOrKey: jwtSecret.secret,
};

passport.use(
    'jwt',
    new JWTstrategy(opts, (jwt_payload, done) => {
        try {
            User.findOne({
                where: {
                    id: jwt_payload.id,
                },
            }).then(user => {
                if (user) {
                    console.log('user found in db in passport');
                    done(null, user);
                } else {
                    console.log('user not found in db');
                    done(null, false);
                }
            });
        } catch (err) {
            done(err);
        }
    }),
);