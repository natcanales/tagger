import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

const GenericMsgModal = ({ message, onClose }) => {
    const [show, setShow] = useState(true)
    const handleClose = () => {
        setShow(false)
        onClose()
    }

    return (
        <Modal show={show}>
            <Modal.Header>
                <Modal.Title>Ups...</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{message}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Aceptar</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default GenericMsgModal