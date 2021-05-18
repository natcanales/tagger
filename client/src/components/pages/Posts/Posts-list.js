import { Component } from 'react'
import PostService from './../../../service/post.service'
import PostCard from './PostCard'
import { Link } from 'react-router-dom'
import './Posts.css'

import { Spinner } from 'react-bootstrap'

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
                <Spinner animation="border" role="status">
                    <span className="sr-only"></span>
                </Spinner>
                :
                <>
                    <Link to="/new-post" className="t-bgBtn btn btn-primary">Crear nuevo post</Link>
                    <div className="posts-list">
                        {posts.map(elm => <PostCard key={elm._id} {...elm} />)}
                    </div>
                </>

        )
    }
}

export default PostsList