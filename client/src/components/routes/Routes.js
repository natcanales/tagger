import React from "react"
import { Switch, Route, Redirect } from 'react-router-dom'
import NewPost from "../pages/Posts/NewPost"
import Posts from "../pages/Posts/Posts"
import Signup from "../pages/Signup/Signup"
import Tags from "../pages/Tag/Tags"
import UserProfile from "../pages/UserProfile/UserProfile"
import Login from "./../pages/Login/Login"
import Users from "./../pages/UserList/Users"

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
                    <Route path="/users" exact render={() => loggedUser.role === "ADMIN" ? <Users /> : <Redirect to="/" />} />
                    <Route path="/my-profile" exact render={() => <UserProfile loggedUser={loggedUser} />} />
                    <Route path="/tags" exact render={() => loggedUser.role === "ADMIN" ? <Tags /> : <Redirect to="/" />} />
                    <Route path="/new-post" exact render={() => loggedUser.role === "USER" ? <NewPost loggedUser={loggedUser} /> : <Redirect to="/" />} />
                </>)
            }
        </Switch>
    )
}

export default Routes