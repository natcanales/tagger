import axios from "axios"

class PostService {
    constructor() {
        this.app = axios.create({
            baseURL: "http://localhost:5000/api/post"
        })
    }

    newPost = data => this.app.post('/new', data)
    getOnePost = postId => this.app.get(`/${postId}`)
    getAllPosts = () => this.app.get('/getAllPosts')
    editPost = data => this.app.put(`/${data.postId}`, data)

}

export default PostService