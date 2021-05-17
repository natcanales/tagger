import { Card, Container, Row } from 'react-bootstrap'

const PostFormat = ({ title, body, author }) => {

    return (
        <Container>
            <Row>
                <Card>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{author.displayName}</Card.Subtitle>
                        <Card.Body><div dangerouslySetInnerHTML={{ __html: body }} /></Card.Body>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default PostFormat