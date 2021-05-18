import { Container } from 'react-bootstrap'

import PostsList from './Posts-list'

const Posts = ({ loggedUser }) => {
    return (
        <Container>
            <hr />
            <PostsList loggedUser={loggedUser} />
        </Container>
    )
}

export default Posts