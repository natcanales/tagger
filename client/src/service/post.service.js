import axios from "axios"

class PostService {
    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}/post`,
            withCredentials: true
        })
    }

    newPost = data => this.app.post('/new', data)
    getOnePost = postId => this.app.get(`/${postId}`)
    getAllPosts = () => this.app.get('/getAllPosts')
    editPost = data => this.app.put(`/${data._id}`, data)
    newComment = (postId, data) => this.app.post(`/${postId}/new-comment`, data)
    getAllComments = postId => this.app.get(`/${postId}/allComments`)

}

export default PostService