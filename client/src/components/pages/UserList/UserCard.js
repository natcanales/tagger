import { Component } from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import { FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import AdminService from '../../../service/admin.service'
import './Users.css'

class UserCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {
                username: '',
                _id: '',
                displayName: ''
            }
        }

        this.adminService = new AdminService()
    }

    componentDidMount() {
        this.setState({ user: this.props.user })
    }

    handleSubmit(userId) {
        this.adminService
            .deleteOneUser(this.state.user._id)
            .then(() => {
                this.props.refreshUsers()
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Col md={3} >
                <Card className="t-card">
                    <Card.Body>
                        <Card.Title>
                            <Link className="black" to={`/user/${this.state.user.username}`}>{this.state.user.username}</Link>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.state.user.displayName}</Card.Subtitle>
                        <Button className="removeUserBtn btn-danger" onClick={() => this.handleSubmit(this.state.user.userId)}><FaTrashAlt /></Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default UserCard