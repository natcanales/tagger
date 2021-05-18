import { Container } from 'react-bootstrap'

import UsersList from './Users-list'

const Users = ({ loggedUser, history }) => {
    return (
        <Container>
            <h1>Listado de users</h1>
            <hr />
            <UsersList loggedUser={loggedUser} history={history} />
        </Container>
    )
}

export default Users