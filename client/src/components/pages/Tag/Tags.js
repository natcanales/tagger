import { Container } from 'react-bootstrap'

import TagList from './Tag-list'

const Tags = ({ loggedUser }) => {
    return (
        <Container>
            <h1>Listado de tags</h1>
            <hr />
            <TagList loggedUser={loggedUser} />
        </Container>
    )
}

export default Tags