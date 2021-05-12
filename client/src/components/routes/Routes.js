import React from "react"
import { Switch, Route, Redirect } from 'react-router-dom'
import Posts from "../pages/Posts/Posts"
import Signup from "../pages/Signup/Signup"
import Login from "./../pages/Login/Login"

const Routes = ({ storeUser, loggedUser }) => {
    return (
        <Switch>
            <Route path="/" exact render={() => loggedUser ? <p>Esto será el home</p> : <Redirect to="/login" />} />
            <Route path="/login" exact render={props => loggedUser ? <Redirect to="/" /> : <Login storeUser={storeUser} history={props.history} />} />
            <Route path="/signup" exact render={props => loggedUser ? <p>Esto será el home</p> : <Signup storeUser={storeUser} history={props.history} />} />
            <Route path="/posts" exact render={() => <Posts loggedUser={loggedUser} />} />
        </Switch>
    )
}

export default Routes