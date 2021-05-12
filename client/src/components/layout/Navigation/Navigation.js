import { Navbar, Nav } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

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
                            {/* <Link to="/perfil" className="nav-link">Perfil</Link> */}
                            <span onClick={() => logout()} className="nav-link">Cerrar sesión</span>
                            <span className="nav-link">| Hola, {loggedUser.username}</span>
                        </>
                }



            </Nav>
        </Navbar>
    )
}

export default Navigation