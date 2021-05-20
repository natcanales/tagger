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
    getByAuthor = userId => this.app.get(`/getByAuthor/${userId}`)
    getAllPosts = () => this.app.get('/getAllPosts')
    getPostsByTags = tags => this.app.post('/getPostsByTags', tags)
    editPost = data => this.app.put(`/${data._id}`, data)
    newComment = (postId, data) => this.app.post(`/${postId}/new-comment`, data)
    getAllComments = postId => this.app.get(`/${postId}/allComments`)

}

export default PostService