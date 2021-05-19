import React from 'react'
import { Link } from 'react-router-dom'

const AdminPage = () => {
    return (
        <>
            <Link to="/users" className="btn btn-primary t-bgBtn">Lista de Users</Link>
        </>
    )
}

export default AdminPage