import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Navigation.css'

import AuthService from './../../../service/auth.service'

const Navigation = ({ loggedUser, storeUser }) => {

    const logout = () => {

        const authService = new AuthService()

        authService
            .logout()
            .then(() => {
                storeUser(undefined)
            })
            .catch(err => console.log(err))
    }

    return (
        <Navbar variant="dark" className="justify-content-around navigation">
            <Navbar.Brand href="/">
                <img
                    src="/white-logo.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top t-logo"
                    alt="tagger logo"
                />
            </Navbar.Brand>
            <Nav className="mr-auto">
                {
                    !loggedUser ?
                        <>
                            <Redirect to="/login" />
                        </>
                        :
                        <>
                            <Link to="/my-profile" className="nav-link t-profileBtn"><p> | Hola, {loggedUser.username} | </p></Link>

                            <NavDropdown title="Menú" className="t-link">
                                <Link to="/posts" className="nav-link"><p>Posts</p></Link>
                                <Link to="/new-post" className="nav-link"><p>Post nuevo</p></Link>
                                <span onClick={() => logout()} className="nav-link">Cerrar sesión</span>
                            </NavDropdown>
                        </>
                }
            </Nav>
        </Navbar>
    )
}

export default Navigation