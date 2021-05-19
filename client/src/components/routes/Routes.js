import React from "react"
import { Switch } from 'react-router-dom'
import PostEdition from "../pages/Posts/PostEdition"
import PostDetails from "../pages/Posts/PostDetails"
import Posts from "../pages/Posts/Posts"
import Signup from "../pages/Signup/Signup"
import Tags from "../pages/Tag/Tags"
import UserProfile from "../pages/UserProfile/UserProfile"
import Login from "./../pages/Login/Login"
import Users from "./../pages/UserList/Users"
import PrivateRoute from "./../routes/PrivateRoutes"
import PublicRoute from "./../routes/PublicRoutes"

const Routes = ({ storeUser, loggedUser }) => {
    return (
        <Switch>
            (<>
                <PublicRoute exact path="/login" loggedUser={loggedUser} storeUser={storeUser} component={Login} />
                <PublicRoute exact path="/signup" loggedUser={loggedUser} storeUser={storeUser} component={Signup} />
                <PrivateRoute exact path="/" loggedUser={loggedUser} hasPermission={true} component={Posts} />
                <PrivateRoute exact path="/users" loggedUser={loggedUser} hasPermission={loggedUser && loggedUser.role === "ADMIN"} component={Users} />
                <PrivateRoute exact path="/my-profile" loggedUser={loggedUser} hasPermission={true} component={UserProfile} />
                <PrivateRoute exact path="/tags" loggedUser={loggedUser} hasPermission={true} component={Tags} />
                <PrivateRoute path="/posts/:postId" loggedUser={loggedUser} hasPermission={true} component={PostDetails} />
                <PrivateRoute path="/edit-post/:postId" loggedUser={loggedUser} hasPermission={loggedUser && loggedUser.role === "USER"} component={PostEdition} />
            </>)
        </Switch>
    )
}

export default Routes