import { Component } from 'react'
import AdminService from './../../../service/admin.service'
import UserCard from './UserCard'

import { Row, Spinner, Button } from 'react-bootstrap'

class UsersList extends Component {

    constructor() {
        super()
        this.state = {
            users: undefined
        }
        this.adminService = new AdminService()
    }


    componentDidMount() {
        this.loadUsers()
    }

    loadUsers() {
        this.adminService
            .getAllUsers()
            .then(response => {
                this.setState({ users: response.data })
            })
            .catch(err => console.log(err))
    }

    render() {
        const { users } = this.state

        return (
            !users
                ?
                <Spinner animation="border" role="status">
                    <span className="sr-only"></span>
                </Spinner>
                :
                <>
                    <Row>
                        {users.map(elm => <UserCard key={elm._id} user={{ ...elm }} refreshUsers={() => this.loadUsers()} />)}
                    </Row>
                    {<Button onClick={() => this.props.history.push("/my-profile")} className="goBackBtn">Volver</Button>}
                </>

        )
    }
}

export default UsersList