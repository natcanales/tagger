import { Component } from 'react'
import { Link } from 'react-router-dom'
import UserService from '../../../service/user.service'
import { Button, Container, Spinner } from 'react-bootstrap'
import UserFormat from './User-format'
import AdminPage from '../Admin/Admin-page'
import PostService from '../../../service/post.service'
import PostCard from '../Posts/PostCard'
import './../../App.css'

class UserProfile extends Component {

    constructor() {
        super()
        this.state = {
            user: undefined,
            posts: []
        }
        this.userService = new UserService()
        this.postService = new PostService()
    }

    componentDidMount() {
        let promise

        if (!this.props.isOwnProfile) {
            let username = this.props.match.params.username
            promise = this.userService.seeOtherProfile(username)
        } else {
            promise = this.userService.myProfile()
        }

        promise
            .then(response => {
                this.setState({ user: response.data })
                return response.data
            })
            .then(user => {
                return this.postService.getByAuthor(user._id)
            })
            .then(response => {
                this.setState({ posts: response.data })
            })
            .catch(err => console.log(err))


    }

    render() {

        const conditionalBtn = () => {
            if (this.props.loggedUser.role === "ADMIN" && (this.props.loggedUser.username === this.state.user.username)) {
                return <AdminPage />
            } else if (this.props.isOwnProfile) {
                return <Link to="/fav-tags" className="btn t-bgBtn btn-primary">Lista de tags favoritas</Link>
            }
        }

        return (
            <Container>
                {
                    !this.state.user ?
                        <Spinner animation="border" role="status">
                            <span className="sr-only"></span>
                        </Spinner>
                        :
                        <>
                            <h1>Perfil de {this.state.user.username}</h1>
                            <UserFormat {...this.state.user} />
                            <Button onClick={this.props.history.goBack} className="btn goBackBtn btn-primary">Volver</Button>
                            <hr />
                            {conditionalBtn()}
                            <div className="posts-list">
                                {this.state.posts.map(elm => <PostCard key={elm._id} {...elm} authorIsUser={this.props.loggedUser._id === elm.author._id} history={this.props.history} />)}
                            </div>
                        </>
                }
            </Container>
        )
    }
}

export default UserProfile