import { Card, Col } from 'react-bootstrap'

const TagCard = ({ name, description }) => {
    return (
        <Col md={3}>
            <Card>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default TagCard