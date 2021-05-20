const session = require('express-session');
const MongoStore = require('connect-mongo');

module.exports = app => {
    app.use(
        session({
            secret: process.env.SECRET,
            resave: true,
            saveUninitialized: false,
            cookie: {
                // sameSite: 'none',
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000
            },
            store: MongoStore.create({
                mongoUrl: process.env.MONGODB_URI || 'mongodb://localhost/basicAuth'
            })
        })
    );
};