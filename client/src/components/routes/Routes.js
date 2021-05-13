import React from "react"
import { Switch, Route, Redirect } from 'react-router-dom'
import Posts from "../pages/Posts/Posts"
import Signup from "../pages/Signup/Signup"
import UserProfile from "../pages/UserProfile/UserProfile"
import Login from "./../pages/Login/Login"
import UsersList from "./../pages/UserList/Users-list"

const Routes = ({ storeUser, loggedUser }) => {
    return (
        <Switch>
            {!loggedUser
                ?
                (<>
                    <Route path="/login" exact render={props => <Login storeUser={storeUser} history={props.history} />} />
                    <Route path="/signup" exact render={props => <Signup storeUser={storeUser} history={props.history} />} />
                    <Route path="/posts" exact render={() => <Redirect to="/login" />} />
                    <Route path="/users-list" exact render={() => <Redirect to="/login" />} />
                    <Route path="/my-profile" exact render={() => <Redirect to="/login" />} />
                </>)
                :
                (<>
                    <Route path="/login" exact render={props => <Redirect to="/" />} />
                    <Route path="/signup" exact render={props => <Redirect to="/" />} />
                    <Route path="/posts" exact render={() => <Posts loggedUser={loggedUser} />} />
                    <Route path="/users-list" exact render={() => loggedUser.role === "ADMIN" ? <UsersList /> : <Redirect to="/" />} />
                    <Route path="/my-profile" exact render={() => <UserProfile loggedUser={loggedUser} />} />
                </>)
            }
        </Switch>
    )
}

export default Routes