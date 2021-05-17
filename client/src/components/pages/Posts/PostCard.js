import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PostCard = ({ _id, title, author }) => {

    return (
        <Col md={3}>
            <Card>
                <Link to={`/posts/${_id}`}>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{author.displayName}</Card.Subtitle>
                    </Card.Body>
                </Link>
            </Card>
        </Col>
    )
}

export default PostCard