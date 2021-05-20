import { Button, Card, Container, Row } from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const PostFormat = ({ _id, title, body, author, authorIsUser }) => {

    return (
        <Container>
            <Row>
                <Card>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            <Link className="grey" to={`/user/${author.username}`}>{author.displayName}</Link>
                        </Card.Subtitle>
                        <Card.Body><div dangerouslySetInnerHTML={{ __html: body }} /></Card.Body>
                        {authorIsUser ? <Link to={`/edit-post/${_id}`}><Button className="editBtn"><FaEdit /></Button></Link> : null}
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default PostFormat