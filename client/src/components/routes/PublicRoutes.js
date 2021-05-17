import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ component: Comp, loggedUser, storeUser, path, ...rest }) => {
    return (
        <Route
            path={path}
            {...rest}
            render={(props) => {
                return loggedUser ? <Redirect to="/" /> : <Comp {...props} storeUser={storeUser} history={props.history} />
            }}
        />
    )
}

export default PublicRoute