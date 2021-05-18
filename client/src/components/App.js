import { Component } from 'react'
import { Container } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"

import AuthServices from './../service/auth.service'
import Routes from './routes/Routes'
import Navigation from './layout/Navigation/Navigation'
import Footer from './layout/Footer/Footer'
import ParticlesBackground from './ParticlesBackground'

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
        <Container className="padded">
          <Routes storeUser={user => this.storeUser(user)} loggedUser={this.state.loggedUser} />
          <ParticlesBackground />
        </Container>
        <Footer />
      </div>)
  }
}

export default App;
