import { Container } from 'react-bootstrap'

import UsersList from './Users-list'

const Posts = ({ loggedUser }) => {
    return (
        <Container>
            <h1>Listado de users</h1>
            <hr />
            <UsersList loggedUser={loggedUser} />
        </Container>
    )
}

export default Posts