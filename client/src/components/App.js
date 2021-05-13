import { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"

import AuthServices from './../service/auth.service'
import Routes from './routes/Routes'
import Navigation from './layout/Navigation/Navigation'
import { Link } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = { loggedUser: undefined }
    this.authService = new AuthServices()
  }

  storeUser = loggedUser => {
    this.setState({ loggedUser })
  }

  fetchUser = () => {
    this.authService
      .isLoggedIn()
      .then(response => this.setState({ loggedUser: response.data }))
      .catch(() => this.setState({ loggedUser: undefined }))
  }

  componentDidMount() {
    this.fetchUser()
  }

  render() {
    return (
      <div className="App" >
        <Navigation storeUser={user => this.storeUser(user)} loggedUser={this.state.loggedUser} />
        <main>
          <Link to="/posts" ><p>posts</p></Link>
          <Link to="/users-list" ><p>users list</p></Link>
          <Link to="/my-profile" ><p>users profile</p></Link>
          <Routes storeUser={user => this.storeUser(user)} loggedUser={this.state.loggedUser} />
        </main>
      </div>)
  }
}

export default App;
