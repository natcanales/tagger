import axios from "axios"

class UserService {
    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}/user`,
            withCredentials: true
        })
    }

    myProfile = () => this.app.get('/current-user')
    seeOtherProfile = username => this.app.get(`/${username}`)
    addFavUser = userId => this.app.put(`/add-fav-user/${userId}`)
    addFavTag = tagName => this.app.put(`/add-fav-tag/${tagName}`)
    getFavTags = () => this.app.get('/fav-tag-list')
    removeFavTag = tagName => this.app.put(`/remove-fav-tag/${tagName}`)

}

export default UserService