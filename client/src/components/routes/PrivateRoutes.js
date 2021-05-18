import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Comp, loggedUser, hasPermission, path, ...rest }) => {
    return (
        <Route
            path={path}
            {...rest}
            render={(props) => {
                return loggedUser && hasPermission ? <Comp {...props} loggedUser={loggedUser} history={props.history} /> : <Redirect to="/login" />
            }}
        />
    )
}

export default PrivateRoute