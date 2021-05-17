import { Container } from 'react-bootstrap'

import CommentList from './CommentList'

const Comments = ({ loggedUser, postId }) => {
    return (
        <Container>
            <hr />
            <h3>Comentarios de este post</h3>
            <hr />
            <CommentList loggedUser={loggedUser} postId={postId} />
        </Container>
    )
}

export default Comments