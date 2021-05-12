import { Component } from 'react'
import PostService from './../../../service/post.service'
import PostCard from './PostCard'

import { Row } from 'react-bootstrap'

class PostsList extends Component {

    constructor() {
        super()
        this.state = {
            posts: undefined
        }
        this.postService = new PostService()
    }


    componentDidMount() {
        this.loadPosts()
    }

    loadPosts() {
        this.postService
            .getAllPosts()
            .then(response => this.setState({ posts: response.data }))
            .catch(err => console.log(err))
    }

    render() {
        const { posts } = this.state

        return (
            !posts
                ?
                <h1>CARGANDO...</h1>
                :
                <>
                    <Row>
                        {posts.map(elm => <PostCard key={elm._id} {...elm} />)}
                    </Row>
                </>

        )
    }
}

export default PostsList