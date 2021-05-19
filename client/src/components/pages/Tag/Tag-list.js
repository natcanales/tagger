import TagCard from './TagCard'

import { Component } from 'react'
import AdminService from './../../../service/admin.service'
import TagService from './../../../service/tag.service'

import { Row, Spinner, Modal, Button } from 'react-bootstrap'
import EditTag from './EditTag'

class TagList extends Component {
    constructor() {
        super()
        this.state = {
            tags: undefined,
            showModal: false,
            isCreationModal: false,
            selectedTagData: {
                _id: null,
                name: '',
                description: ''
            }
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
                this.setState({ tags: [] })
                this.setState({ tags: response.data.allTags })
            })
            .catch(err => console.log(err))
    }

    showEditModal({ _id, name, description }) {
        this.setState({
            showModal: true,
            isCreationModal: false,
            selectedTagData: { _id, name, description }
        })
    }

    render() {
        const { tags } = this.state

        const addTagBtn = () => {
            if (this.props.loggedUser.role === "ADMIN") {
                return (< Button onClick={() => this.setState({ showModal: true, isCreationModal: true })
                } className="t-bgBtn" size="sm" style={{ marginBottom: '20px' }
                }> Añadir una tag nueva</Button >)
            } else {
                return null
            }
        }

        return (
            !tags
                ?
                <Spinner animation="border" role="status">
                    <span className="sr-only"></span>
                </Spinner>
                :
                <>
                    {addTagBtn()}
                    <Row>
                        {tags.map(elm => <TagCard
                            key={elm._id}
                            tag={{ ...elm }}
                            refreshTags={() => this.loadTags()}
                            loggedUser={this.props.loggedUser}
                            showEditModal={() => this.showEditModal({ ...elm })} />)}
                    </Row>

                    <Modal show={this.state.showModal} onHide={() => this.setState({ showModal: false })}>
                        <Modal.Header> <Modal.Title>{this.state.isCreationModal ? "Nueva" : "Editar"} tag</Modal.Title> </Modal.Header>
                        <Modal.Body>
                            <EditTag
                                loggedUser={this.props.loggedUser}
                                closeModal={() => this.setState({ showModal: false })}
                                refreshTags={() => this.loadTags()}
                                isNew={this.state.isCreationModal}
                                tagData={{ ...this.state.selectedTagData }} />
                        </Modal.Body>
                    </Modal>
                </>

        )
    }
}

export default TagList