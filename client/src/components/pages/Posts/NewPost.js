// import { Component } from 'react'
// import { Button } from 'react-bootstrap'
// import UsersService from '../../../service/user.service'
// import PostService from '../../../service/post.service'
// import { Editor } from 'react-draft-wysiwyg'
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

// class NewPost extends Component {

//     constructor() {
//         super()
//         this.state = {
//             post: {
//                 title: '',
//                 body: ''
//             }
//         }

//         this.userService = new UsersService()
//         this.postService = new PostService()
//     }


//     handleInputChange(e) {
//         const { name, value } = e.target
//         this.setState({ post: { ...this.state.post, [name]: value } })
//     }


//     handleSubmit() {
//         this.postService
//             .newPost(this.state.post)
//             .then(() => {
//                 this.props.refreshPosts()
//             })
//             .catch(err => console.log(err))
//     }


//     render() {
//         return (
//             <>
//                 <Editor
//                     toolbarClassName="toolbarClassName"
//                     wrapperClassName="wrapperClassName"
//                     editorClassName="editorClassName"
//                 />
//                 <Button variant="dark" type="submit" refreshPosts={() => this.loadPosts()}>Publicar post</Button>
//             </>
//         )
//     }
// }

// export default NewPost