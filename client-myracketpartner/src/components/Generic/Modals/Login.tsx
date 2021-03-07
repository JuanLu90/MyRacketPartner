// DEPENDENCES
import React from "react";
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

// STYLED-COMPONENTS
const Input = styled.input`
    width: 100%;
    margin: 5px 0;
    padding: 5px 10px;
    border: 1px solid #6c757d;
    border-radius: 3px;
    font-size: 0.9rem;
`;

const SignInBtn = styled.button.attrs({
    children: 'Sign In'
})`
    width: 100%;
    margin: 5px 0;
    padding: 6px 0;
    color: #ffffff;
    background-color: #74c69d;
    border: 0;
    border-radius: 3px;
`;

const ModalHeader = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 60px;
    color: #6c757d;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);

    svg {
        position: absolute;
        top: 15px;
        right: 15px;
        cursor: pointer;
    }
`;

const ModalFooter = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0.75rem;
    background-color: #ECF0F1;
    border-top: 1px solid #dee2e6;
    border-bottom-right-radius: calc(0.3rem - 1px);
    border-bottom-left-radius: calc(0.3rem - 1px);

    a {
        color: #6c757d;
        font-size: 0.8rem;
        text-decoration: none;
    }
`;

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
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <ModalHeader>
                <Modal.Title>Login</Modal.Title>
                <FontAwesomeIcon icon={faTimes} onClick={handleClose} />
            </ModalHeader>
            <Modal.Body>
                <Input type="text" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <SignInBtn />
            </Modal.Body>
            <ModalFooter>
                <a href="/#"> Forgot Password? </a>
            </ModalFooter>
        </Modal>
    );
};

export default LoginModal;
