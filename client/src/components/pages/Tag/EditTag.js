import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import AdminService from '../../../service/admin.service'
import GenericMsgModal from '../../GenericMsgModal'

class EditTag extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tag: {
                _id: null,
                name: '',
                description: '',
            },
            error: {
                exists: false,
                message: null
            },
            isNew: true
        }

        this.adminService = new AdminService()
    }

    componentDidMount() {
        this.setState({ isNew: this.props.isNew, tag: { ...this.props.tagData } })
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ tag: { ...this.state.tag, [name]: value } })
    }


    handleSubmit(e) {
        e.preventDefault()

        let promise
        console.log(this.state.tag)

        if (this.state.isNew) {
            promise = this.adminService.newTag(this.state.tag)
        } else {
            promise = this.adminService.editTag(this.state.tag)
        }

        promise
            .then(() => {
                this.props.closeModal()
                this.props.refreshTags()
            })
            .catch(err => {
                this.setState(
                    {
                        error: {
                            exists: true,
                            message: `Error al ${this.state.isNew ? "crear" : "editar"} la etiqueta. No se admiten nombres duplicados ni vacíos.`
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
                        <Form.Control type="text" value={this.state.tag.name} onChange={e => this.handleInputChange(e)} name="name" />
                    </Form.Group>

                    <Form.Group controlId="description">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" value={this.state.tag.description} onChange={e => this.handleInputChange(e)} name="description" />
                    </Form.Group>

                    <Button className="t-bgBtn" style={{ width: '100%' }} type="submit">{this.state.isNew ? "Crear" : "Editar"} tag</Button>

                </Form>

                {this.state.error.exists ? <GenericMsgModal message={this.state.error.message} onClose={() => this.resetError()} /> : null}
            </>
        )
    }
}

export default EditTag