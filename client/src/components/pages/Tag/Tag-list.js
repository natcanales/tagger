import TagCard from './TagCard'

import { Component } from 'react'
import AdminService from './../../../service/admin.service'

import { Row, Spinner, Modal, Button } from 'react-bootstrap'
import NewTag from './NewTag'



class TagList extends Component {
    constructor() {
        super()
        this.state = {
            tags: undefined,
            showModal: false
        }
        this.adminService = new AdminService()

    }

    componentDidMount() {
        this.loadTags()
    }

    loadTags() {
        this.adminService
            .getAllTags()
            .then(response => {
                console.log(response)
                this.setState({ tags: response.data.allTags })
            })
            .catch(err => console.log(err))
    }

    render() {
        const { tags } = this.state

        return (
            !tags
                ?
                <Spinner animation="border" role="status">
                    <span className="sr-only"></span>
                </Spinner>
                :
                <>
                    {<Button onClick={() => this.setState({ showModal: true })} variant="dark" size="sm" style={{ marginBottom: '20px' }}>Añadir una tag nueva</Button>}
                    <Row>
                        {tags.map(elm => <TagCard key={elm._id} {...elm} />)}
                    </Row>

                    <Modal show={this.state.showModal} onHide={() => this.setState({ showModal: false })}>
                        <Modal.Header> <Modal.Title>Nuevo tag</Modal.Title> </Modal.Header>
                        <Modal.Body>
                            <NewTag loggedUser={this.props.loggedUser} closeModal={() => this.setState({ showModal: false })} refreshTags={() => this.loadTags()} />
                        </Modal.Body>
                    </Modal>
                </>

        )
    }
}

export default TagList