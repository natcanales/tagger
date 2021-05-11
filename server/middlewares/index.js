module.exports = {
    isLoggedIn: (req, res, next) => {
        if (req.session.currentUser) {
            next()
        }
        else {
            res.json({ status: 403, message: 'Inicia sesión para acceder' })
        }
    },
    checkRoles: (...allowedRoles) => (req, res, next) => {
        if (allowedRoles.includes(req.session.currentUser.role)) {
            next()
        } else {
            res.json({ status: 401, message: 'Desautorizado' })
        }
    }
}