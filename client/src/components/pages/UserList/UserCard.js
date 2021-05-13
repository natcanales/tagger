import { Card, Col } from 'react-bootstrap'

const UserCard = ({ displayName, username, image }) => {

    return (
        <Col md={3}>
            <Card>
                <Card.Body>
                    <Card.Img>{image}</Card.Img>
                    <Card.Title>{username}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{displayName}</Card.Subtitle>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default UserCard