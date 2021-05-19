import TagCard from './TagCard'

import { Component } from 'react'
import AdminService from './../../../service/admin.service'
import TagService from './../../../service/tag.service'

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
        this.tagService = new TagService()

    }

    componentDidMount() {
        this.loadTags()
    }

    loadTags() {
        this.tagService
            .getAllTags()
            .then(response => {
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
                    {<Button onClick={() => this.setState({ showModal: true })} className="t-bgBtn" size="sm" style={{ marginBottom: '20px' }}>Añadir una tag nueva</Button>}
                    <Row>
                        {tags.map(elm => <TagCard key={elm._id} tag={{ ...elm }} refreshTags={() => this.loadTags()} loggedUser={this.props.loggedUser} />)}
                    </Row>
                    {<Button className="goBackBtn" onClick={() => this.props.history.push("/my-profile")} >Volver</Button >}

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