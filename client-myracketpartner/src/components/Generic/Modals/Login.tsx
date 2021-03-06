// DEPENDENCES
import React from "react";
import Modal from 'react-bootstrap/Modal';

// TYPESCRIPT
interface IProps {
    show: Boolean;
    setShow: any;
};

const LoginModal: React.FC<IProps> = props => {
    const { show, setShow } = props;
    const handleClose = () => setShow(false);

    return (
        <Modal 
            show={show}
            onHide={handleClose}
            keyboard={false}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>Login Form</Modal.Body>
        <Modal.Footer>
            <button onClick={handleClose}>
                Close
            </button>
            <button onClick={handleClose}>
                Sign In
            </button>
        </Modal.Footer>
        </Modal>
    );
};

export default LoginModal;
