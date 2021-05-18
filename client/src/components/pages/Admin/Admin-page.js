import React from 'react'
import { Link } from 'react-router-dom'

const AdminPage = () => {
    return (
        <>
            <Link to="/users" className="btn btn-primary t-bgBtn right-marged">Lista de Users</Link>
            <Link to="/tags" className="btn btn-primary t-bgBtn">Lista de Tags</Link>
        </>
    )
}

export default AdminPage