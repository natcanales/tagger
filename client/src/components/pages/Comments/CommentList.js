import CommentCard from './CommentCard'

import { Component } from 'react'
import PostService from './../../../service/post.service'

import { Row, Spinner, Modal, Button } from 'react-bootstrap'
import NewComment from './../Comments/NewComment'



class CommentList extends Component {
    constructor() {
        super()
        this.state = {
            comments: undefined,
            showModal: false
        }
        this.postService = new PostService()

    }

    componentDidMount() {
        this.loadComments()
    }

    loadComments() {
        this.postService
            .getAllComments(this.props.postId)
            .then(response => {
                this.setState({ comments: response.data })
            })
            .catch(err => console.log(err))
    }

    render() {
        const { comments } = this.state

        return (
            !comments ?
                (<Spinner animation="border" role="status">
                    <span className="sr-only"></span>
                </Spinner>)
                :
                !comments.length ?
                    (<p>Este post no tiene comentarios aún</p>)
                    :
                    (<>
                        {<Button onClick={() => this.setState({ showModal: true })} variant="dark" size="sm" style={{ marginBottom: '20px' }}>Añadir un comentario</Button>}
                        <Row>
                            {comments.map(elm => <CommentCard key={elm._id} {...elm} />)}
                        </Row>

                        <Modal show={this.state.showModal} onHide={() => this.setState({ showModal: false })}>
                            <Modal.Header> <Modal.Title>Nuevo comentario</Modal.Title> </Modal.Header>
                            <Modal.Body>
                                <NewComment loggedUser={this.props.loggedUser} closeModal={() => this.setState({ showModal: false })} refreshComments={() => this.loadComments()} />
                            </Modal.Body>
                        </Modal>
                    </>)

        )
    }
}

export default CommentList