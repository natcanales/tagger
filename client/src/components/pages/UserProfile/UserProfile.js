import { Component } from 'react'
import UserService from '../../../service/user.service'
import { Container } from 'react-bootstrap'
import UserFormat from './User-format'

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
                {!this.state.user ? <h1>Cargando...</h1> : <UserFormat {...this.state.user} />}
            </Container>
        )
    }
}

export default UserProfile