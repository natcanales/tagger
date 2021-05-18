import { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import UsersService from '../../../service/user.service'
import PostService from '../../../service/post.service'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import CustomEditor from './CustomEditor'


// https://blog.logrocket.com/building-rich-text-editors-in-react-using-draft-js-and-react-draft-wysiwyg/
// https://stackoverflow.com/questions/63015073/how-to-customize-the-style-for-react-draft-wysiwyg
class NewPost extends Component {

    constructor() {
        super()
        this.state = {
            post: {
                title: '',
                body: ''
            }
        }

        this.userService = new UsersService()
        this.postService = new PostService()
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
        this.postService
            .newPost(this.state.post)
            .then(() => {
                alert('Guardado')
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <Form onSubmit={e => this.handleSubmit(e)}>
                    <Form.Group controlId="title">
                        <Form.Label>Título</Form.Label>
                        <Form.Control type="text" value={this.state.post.title} onChange={e => this.handleTitleChange(e)} name="title" />
                    </Form.Group>
                    <br />

                    <CustomEditor updateState={data => this.updateState(data)} />
                    <Button className="t-bgBtn" type="submit" >Publicar post</Button>
                </Form>
            </>
        )
    }
}

export default NewPost