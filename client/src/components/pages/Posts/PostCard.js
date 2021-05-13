import { Card, Col } from 'react-bootstrap'

const PostCard = ({ title, body, author }) => {

    return (
        <Col md={3}>
            <Card>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{author.displayName}</Card.Subtitle>
                    <Card.Text>{body}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default PostCard