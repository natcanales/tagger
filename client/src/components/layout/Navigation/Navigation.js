import { Navbar, Nav } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

import AuthService from './../../../service/auth.service'

const Navigation = ({ loggedUser, storeUser }) => {

    const logout = () => {

        const authService = new AuthService()

        authService
            .logout()
            .then(() => {
                storeUser(undefined)
                console.log("Deslogueao!")
            })
            .catch(err => console.log(err))
    }

    return (
        <Navbar bg="dark" variant="dark" className="justify-content-between">
            <Nav className="mr-auto">
                {
                    !loggedUser ?
                        <>
                            <Redirect to="/login" />
                        </>
                        :
                        <>
                            <Link to="/posts" className="nav-link"><p>Posts</p></Link>
                            <Link to="/users" className="nav-link"><p>Users</p></Link>
                            <Link to="/tags" className="nav-link"><p>Tags</p></Link>
                            <Link to="/new-post" className="nav-link"><p>Post nuevo</p></Link>
                            <span onClick={() => logout()} className="nav-link">Cerrar sesión</span>
                            <Link to="/my-profile" className="nav-link"><p>| Hola, {loggedUser.username}</p></Link>
                        </>
                }
            </Nav>
        </Navbar>
    )
}

export default Navigation