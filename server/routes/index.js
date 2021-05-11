module.exports = app => {

    // Base URLS
    app.use('/api/auth', require('./auth.routes.js'))
    app.use('/api/admin', require('./admin.routes.js'))
    app.use('/api/user', require('./user.routes.js'))
    app.use('/api/post', require('./post.routes.js'))
}