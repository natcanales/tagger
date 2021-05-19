import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import AdminService from '../../../service/admin.service'
import GenericMsgModal from '../../GenericMsgModal'

class NewTag extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tag: {
                name: '',
                description: '',
            },
            error: {
                exists: false,
                message: null
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
            .catch(err => {
                this.setState(
                    {
                        error: {
                            exists: true,
                            message: "Error al crear la etiqueta. No se admiten nombres duplicados ni vacíos."
                        }
                    })
            })

    }

    resetError() {
        this.setState({
            error: {
                exists: false,
                message: null
            }
        })
    }

    render() {
        return (
            <>
                <Form onSubmit={e => this.handleSubmit(e)}>

                    <Form.Group controlId="name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={e => this.handleInputChange(e)} name="name" />
                    </Form.Group>

                    <Form.Group controlId="description">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" value={this.state.description} onChange={e => this.handleInputChange(e)} name="description" />
                    </Form.Group>

                    <Button className="t-bgBtn" style={{ width: '100%' }} type="submit">Crear tag</Button>

                </Form>

                {this.state.error.exists ? <GenericMsgModal message={this.state.error.message} onClose={() => this.resetError()} /> : null}
            </>
        )
    }
}

export default NewTag