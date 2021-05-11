module.exports = app => {

    // Catch 404 error in case no route matches
    app.use((req, res) => res.status(404).json({ status: 404, message: "not found" }))

    // Catch 500 error in case of server errors
    app.use((err, req, res) => {
        console.error('Server error:', req.method, req.path, err)
        if (!res.headersSent) {
            res.status(500).json({ status: 500, message: "server error" })
        }
    })

}