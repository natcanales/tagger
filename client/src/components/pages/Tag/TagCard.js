import { Component } from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import { FaEdit, FaStar } from 'react-icons/fa'
import AdminService from '../../../service/admin.service'
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
    }

    componentDidMount() {
        this.setState({ tag: this.props.tag })
    }

    handleSubmit(tagId) {
        this.adminService
            .editTag(this.state.tag._id)
            .then(() => {
                this.props.refreshTags()
            })
            .catch(err => console.log(err))
    }

    render() {

        const buttons = () => {
            if (this.props.loggedUser.role === "ADMIN") {
                return <Button className="editBtn" onClick={() => this.handleSubmit(this.state.tag.tagId)}><FaEdit /></Button>
            } else {
                return <Button className="favBtn" onClick={() => this.handleSubmit(this.state.tag.tagId)}><FaStar /></Button>
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