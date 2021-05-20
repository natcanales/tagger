import axios from "axios"

class AdminService {
    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}/tag`,
            withCredentials: true
        })
    }

    getAllTags = () => this.app.get('/tag-list')
    getAvailableTags = () => this.app.get('/available-tag-list')

}

export default AdminService