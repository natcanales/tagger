import { Container } from 'react-bootstrap'

import PostsList from './Posts-list'

const Posts = ({ loggedUser, history }) => {
    return (
        <Container>
            <hr />
            <PostsList loggedUser={loggedUser} history={history} />
        </Container>
    )
}

export default Posts