import { Container } from 'react-bootstrap'

import TagList from './Tag-list'

const Tags = ({ loggedUser, history, onlyFav }) => {
    return (
        <Container>
            <h1>{onlyFav ? "Tags favoritas" : "Listado de tags"}</h1>
            <hr />
            <TagList loggedUser={loggedUser} history={history} onlyFav={onlyFav} />
        </Container>
    )
}

export default Tags