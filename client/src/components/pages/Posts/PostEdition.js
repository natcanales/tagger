import { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import UsersService from '../../../service/user.service'
import PostService from '../../../service/post.service'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import CustomEditor from './CustomEditor'

// https://blog.logrocket.com/building-rich-text-editors-in-react-using-draft-js-and-react-draft-wysiwyg/
// https://stackoverflow.com/questions/63015073/how-to-customize-the-style-for-react-draft-wysiwyg
class PostEdition extends Component {

    constructor() {
        super()
        this.state = {
            post: {
                _id: null,
                title: '',
                body: ''
            },
            hasLoaded: false
        }

        this.userService = new UsersService()
        this.postService = new PostService()
    }

    componentDidMount() {
        let postId = this.props.match.params.postId

        if (postId !== "new") {
            this.postService
                .getOnePost(postId)
                .then(post => {
                    this.setState({ post: post.data, hasLoaded: true })
                })
                .catch(err => console.log(err))
        } else {
            let stateCopy = { ...this.state }
            stateCopy.hasLoaded = true
            this.setState(stateCopy)
        }
    }

    updateState(postData) {
        let stateCopy = { ...this.state.post }
        stateCopy.body = postData
        this.setState({ post: stateCopy })
    }

    handleTitleChange(e) {
        let stateCopy = { ...this.state.post }
        const value = e.target.value
        stateCopy.title = value
        this.setState({ post: stateCopy })
    }

    handleSubmit(e) {
        e.preventDefault()

        let promise

        if (this.state.post._id === null) {
            promise = this.postService
                .newPost(this.state.post)
        } else {
            promise = this.postService
                .editPost(this.state.post)
        }

        promise
            .then(() => {
                this.props.history.push("/")
            })
            .catch(err => console.log(err))
    }

    render() {
        const showEditor = () => {
            if (this.state.hasLoaded) {
                return (
                    <>
                        <Form onSubmit={e => this.handleSubmit(e)}>
                            <Form.Group controlId="title">
                                <Form.Label>Título</Form.Label>
                                <Form.Control type="text" value={this.state.post.title} onChange={e => this.handleTitleChange(e)} name="title" />
                            </Form.Group>
                            <br />

                            <CustomEditor updateState={data => this.updateState(data)} postContent={this.state.post.body} />
                            <Button className="t-bgBtn" type="submit" >Publicar post</Button>
                        </Form>
                    </>
                )
            } else {
                return null
            }
        }

        return showEditor()
    }
}

export default PostEdition