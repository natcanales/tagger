import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PostCard = ({ _id, title, author, body, history }) => {

    return (
        <Link to={`/posts/${_id}`} className="no-decor">
            <Card className="marged t-bgColor t-card">
                <Card.Body className="lat-padded">
                    <Card.Title className="big">{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{author.displayName}</Card.Subtitle>
                    <Card.Text><span className="t-italic" dangerouslySetInnerHTML={{ __html: body.slice(0, 100).replace(/(<([^>]+)>)/ig, '') }} /></Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default PostCard