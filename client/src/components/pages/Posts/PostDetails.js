import { Component } from 'react'
import PostService from '../../../service/post.service'
import { Container, Spinner } from 'react-bootstrap'
import PostFormat from './Post-format'
import Comments from './../Comments/Comments'

class PostDetails extends Component {

    constructor() {
        super()
        this.state = {
            post: undefined
        }
        this.postService = new PostService()
    }

    componentDidMount() {
        const { postId } = this.props.match.params

        this.postService
            .getOnePost(postId)
            .then(post => this.setState({ post: post.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                {
                    !this.state.post ?
                        <Spinner animation="border" role="status">
                            <span className="sr-only"></span>
                        </Spinner>
                        :
                        <>
                            <PostFormat {...this.state.post} />
                            <hr />
                            <Comments loggedUser={this.props.loggedUser} postId={this.state.post._id} />
                        </>
                }
            </Container>
        )
    }
}

export default PostDetails