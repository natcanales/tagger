import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthService from './../../../service/auth.service'
import GenericMsgModal from '../../GenericMsgModal'
import './../../App.css'

class SignupForm extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            pwd: '',
            displayName: '',
            email: '',
            birthdate: '',
            error: {
                exists: false,
                message: null
            }
        }
        this.authService = new AuthService()
    }


    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    handleSubmit(e) {
        e.preventDefault()
        this.authService
            .signup(this.state)
            .then(response => {
                this.props.history.push('/login')
            })
            .catch(err => {
                this.setState(
                    {
                        error: {
                            exists: true,
                            message: `Error al crear tu usuario. Quizá ya seas user. 
                                Si no lo eres, comprueba tus datos (recuerda que todos 
                                los campos son obligatorios).`
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

                    <Form.Group controlId="displayName">
                        <Form.Label>Nombre completo</Form.Label>
                        <Form.Control type="text" value={this.state.displayName} onChange={e => this.handleInputChange(e)} name="displayName" />
                    </Form.Group>

                    <Form.Group controlId="username">
                        <Form.Label>Nombre de usuario</Form.Label>
                        <Form.Control type="text" value={this.state.username} onChange={e => this.handleInputChange(e)} name="username" />
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label>Mail</Form.Label>
                        <Form.Control type="email" value={this.state.email} onChange={e => this.handleInputChange(e)} name="email" />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={this.state.pwd} onChange={e => this.handleInputChange(e)} name="pwd" />
                    </Form.Group>

                    <Form.Group controlId="birthdate">
                        <Form.Label>Fecha de nacimiento</Form.Label>
                        <Form.Control type="date" value={this.state.birthdate} onChange={e => this.handleInputChange(e)} name="birthdate" />
                    </Form.Group>

                    <Button className="t-bgBtn" style={{ width: '100%' }} type="submit">¡Vamos allá!</Button>
                    <Link className="btn t-bgBtn btn-primary t-bgBtn" style={{ width: '100%' }} to={'/login'}>Sí que soy tagger</Link>
                </Form>
                {this.state.error.exists ? <GenericMsgModal message={this.state.error.message} onClose={() => this.resetError()} /> : null}
            </>
        )
    }
}

export default SignupForm