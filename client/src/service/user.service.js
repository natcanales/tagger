import axios from "axios"

class UserService {
    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}/user`,
            withCredentials: true
        })
    }

    myProfile = () => this.app.get('/current-user')
    seeOtherProfile = userId => this.app.get(`/${userId}`)
    addFavUser = userId => this.app.put(`/add-fav-user/${userId}`)
    addFavTag = tagId => this.app.put(`/add-fav-tag${tagId}`)

}

export default UserService