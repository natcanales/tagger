import { Container, Row, Col } from 'react-bootstrap'
import SignupForm from './Signup-form'

const Signup = ({ storeUser, history }) => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    <h1>Registro</h1>
                    <hr />
                    <SignupForm storeUser={storeUser} history={history} />
                    <hr />
                </Col>
            </Row>
        </Container>
    )
}

export default Signup