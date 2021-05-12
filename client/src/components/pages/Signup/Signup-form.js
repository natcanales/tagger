import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import AuthService from './../../../service/auth.service'

class SignupForm extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            pwd: '',
            displayName: '',
            email: '',
            birthdate: ''
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
            .catch(err => console.log(err))
    }

    render() {
        return (

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

                <Button variant="dark" style={{ width: '100%', marginTop: '20px' }} type="submit">¡Vamos allá!</Button>
            </Form>
        )
    }
}

export default SignupForm