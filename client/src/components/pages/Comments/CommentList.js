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
        const renderModal = () => {
            if (comments) {
                return (
                    <>
                        <Button onClick={() => this.setState({ showModal: true })} className="t-bgBtn" size="sm" style={{ marginBottom: '20px' }}>Añadir un comentario</Button>
                        <Modal show={this.state.showModal} onHide={() => this.setState({ showModal: false })}>
                            <Modal.Header> <Modal.Title>Nuevo comentario</Modal.Title> </Modal.Header>
                            <Modal.Body>
                                <NewComment postId={this.props.postId} loggedUser={this.props.loggedUser} closeModal={() => this.setState({ showModal: false })} refreshComments={() => this.loadComments()} />
                            </Modal.Body>
                        </Modal>
                    </>
                )
            } else {
                return (
                    <Spinner animation="border" role="status">
                        <span className="sr-only"></span>
                    </Spinner>
                )
            }
        }

        const renderComments = () => {
            if (comments && !comments.length) {
                return (<p>Este post no tiene comentarios aún</p>)
            } else if (comments) {
                return (
                    <Row>
                        {comments.map(elm => <CommentCard key={elm._id} {...elm} />)}
                    </Row>
                )
            }
        }

        return (
            <>
                {renderModal()}
                {renderComments()}
            </>
        )
    }
}

export default CommentList