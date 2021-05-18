import { Component } from 'react'
import UserService from '../../../service/user.service'
import { Container, Spinner } from 'react-bootstrap'
import UserFormat from './User-format'
import AdminPage from '../Admin/Admin-page'

class UserProfile extends Component {

    constructor() {
        super()
        this.state = {
            user: undefined
        }
        this.userService = new UserService()
    }

    componentDidMount() {

        this.userService
            .myProfile()
            .then(response => this.setState({ user: response.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                {
                    !this.state.user ?
                        <Spinner animation="border" role="status">
                            <span className="sr-only"></span>
                        </Spinner>
                        :
                        <>
                            <h1>Perfil de {this.state.user.username}</h1>
                            <hr />
                            <UserFormat {...this.state.user} />
                            <hr />
                            {this.state.user.role === "ADMIN" ? <AdminPage /> : null}
                        </>
                }
            </Container>
        )
    }
}

export default UserProfile