import axios from "axios"

class AuthService {
    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}/auth`,
            withCredentials: true
        })
    }

    signup = data => {
        return this.app.post('/new-user', data)
    }
    login = data => this.app.post('/login', data)
    logout = () => this.app.get('/logout')
    isLoggedIn = () => this.app.get('/isLoggedIn')

}

export default AuthService