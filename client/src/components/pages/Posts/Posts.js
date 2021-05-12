import { Container } from 'react-bootstrap'

import PostsList from './Posts-list'

const Posts = ({ loggedUser }) => {
    return (
        <Container>
            <h1>Listado de posts</h1>
            <hr />
            <PostsList loggedUser={loggedUser} />
        </Container>
    )
}

export default Posts