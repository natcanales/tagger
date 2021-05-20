import { Card, Col } from 'react-bootstrap'

const CommentCard = ({ body, author, date }) => {
    return (
        <Col md={3}>
            <Card className="t-card">
                <Card.Body>
                    <Card.Text>{body}</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">{author.displayName}</Card.Subtitle>
                    <Card.Text>{date}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CommentCard