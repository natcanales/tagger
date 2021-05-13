module.exports = {
    isLoggedIn: (req, res, next) => {
        console.log('-----', req.session)

        if (req.session.currentUser) {

            next()
        }
        else {
            res.json({ status: 403, message: "No admin, caca" })
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