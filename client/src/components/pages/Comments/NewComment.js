import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import PostService from '../../../service/post.service'

class NewComment extends Component {

    constructor(props) {
        super(props)
        this.state = {
            comment: {
                body: ''
            }
        }

        this.postService = new PostService()
    }


    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ comment: { ...this.state.comment, [name]: value } })
    }


    handleSubmit(e) {
        e.preventDefault()
        this.postService
            .newComment(this.state.comment)
            .then(() => {
                this.props.closeModal()
                this.props.refreshComments()
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <Form onSubmit={e => this.handleSubmit(e)}>
                <Form.Group controlId="body">
                    <Form.Control type="text" value={this.state.body} onChange={e => this.handleInputChange(e)} name="body" />
                </Form.Group>

                <Button className="t-bgBtn" style={{ width: '100%' }} type="submit">Publicar comentario</Button>
            </Form>
        )
    }
}

export default NewComment