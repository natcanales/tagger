import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import AdminService from '../../../service/admin.service'

class NewTag extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tag: {
                name: '',
                description: '',
            }
        }

        this.adminService = new AdminService()
    }


    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ tag: { ...this.state.tag, [name]: value } })
    }


    handleSubmit(e) {
        e.preventDefault()
        this.adminService
            .newTag(this.state.tag)
            .then(() => {
                this.props.closeModal()
                this.props.refreshTags()
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <Form onSubmit={e => this.handleSubmit(e)}>

                <Form.Group controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" value={this.state.name} onChange={e => this.handleInputChange(e)} name="name" />
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" value={this.state.description} onChange={e => this.handleInputChange(e)} name="description" />
                </Form.Group>

                <Button variant="dark" style={{ width: '100%' }} type="submit">Crear tag</Button>

            </Form>
        )
    }
}

export default NewTag