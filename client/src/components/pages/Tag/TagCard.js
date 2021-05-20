import { Component } from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import { FaEdit, FaStar, FaTrashAlt } from 'react-icons/fa'
import AdminService from '../../../service/admin.service'
import UserService from '../../../service/user.service'
import './Tags.css'

class TagCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tag: {
                name: '',
                _id: '',
                description: ''
            }
        }

        this.adminService = new AdminService()
        this.userService = new UserService()
    }

    componentDidMount() {
        this.setState({ tag: this.props.tag })
    }

    handleSubmit(tagId) {
        this.adminService
            .editTag(this.state.tag)
            .then(() => {
                this.props.refreshTags()
            })
            .catch(err => console.log(err))
    }

    addFavBtn() {
        this.userService
            .addFavTag(this.state.tag.name)
            .then(() => {
                this.props.refreshTags()
            })
            .catch(err => console.log(err))

    }

    removeFavBtn() {
        this.userService
            .removeFavTag(this.state.tag.name)
            .then(() => {
                this.props.refreshTags()
            })
            .catch(err => console.log(err))

    }

    render() {

        const buttons = () => {
            if (this.props.loggedUser.role === "ADMIN") {
                return <Button className="editBtn" onClick={() => this.props.showEditModal()}><FaEdit /></Button>
            } else if (this.props.isFav) {
                return <Button className="btn btn-danger removeFavBtn" onClick={() => this.removeFavBtn()}><FaTrashAlt /></Button>
            } else {
                return <Button className="favBtn" onClick={() => this.addFavBtn()}><FaStar /></Button>
            }
        }

        return (
            <Col md={4} >
                <Card>
                    <Card.Body>
                        <Card.Title>{this.state.tag.name}</Card.Title>
                        <Card.Text>{this.state.tag.description}</Card.Text>
                        {buttons()}
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default TagCard