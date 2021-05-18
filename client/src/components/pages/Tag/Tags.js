import { Container } from 'react-bootstrap'

import TagList from './Tag-list'

const Tags = ({ loggedUser, history }) => {
    return (
        <Container>
            <h1>Listado de tags</h1>
            <hr />
            <TagList loggedUser={loggedUser} history={history} />
        </Container>
    )
}

export default Tags