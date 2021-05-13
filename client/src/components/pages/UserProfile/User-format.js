import { Card, Container, Row, Col } from 'react-bootstrap'

const UserFormat = ({ displayName, username, image, email }) => {

    return (
        <Container>
            <Row>
                <Col >
                    <Card>
                        <Card.Body>
                            <Card.Img>{image}</Card.Img>
                            <Card.Title>{username}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{displayName}</Card.Subtitle>
                            <Card.Text>{email}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default UserFormat