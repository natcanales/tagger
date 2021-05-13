import axios from "axios"

class AdminService {
    constructor() {
        this.app = axios.create({
            baseURL: "http://localhost:5000/api/admin",
            withCredentials: true
        })
    }

    newTag = data => this.app.post('/new-tag', data)
    getOneTag = tagId => this.app.get(`/edit-tag/${tagId}`)
    editTag = data => this.app.put(`/${data.tagId}`, data)
    getAllTags = () => this.app.get('/tag-list')
    getAllUsers = () => this.app.get('/users-list')
    deleteOneUser = userId => this.app.delete(`/delete-user/${userId}`)
    deleteOnePost = postId => this.app.delete(`/delete-post/${postId}`)
    deleteOneTag = tagId => this.app.delete(`/delete-tag/${tagId}`)

}

export default AdminService