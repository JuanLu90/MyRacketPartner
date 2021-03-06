// DEPENDENCES
import React from "react";
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';

// STYLED-COMPONENTS
const Input = styled.input`
    width: 100%;
    margin: 5px 0;
`;

const SignInBtn = styled.button.attrs({
    children: 'Sign In'
})`
    width: 100%;
    margin: 5px 0;
`;

const FooterWrapper = styled.div`
    background-color: #ECF0F1;
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
        <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Input type="text" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <SignInBtn />
        </Modal.Body>
        <Modal.Footer>
            <FooterWrapper>
            {/* <button onClick={handleClose}>
                Close
            </button>
            <button onClick={handleClose}>
                Sign In
            </button> */}
            <a href="/#"> Forgot Password? </a>
            </FooterWrapper>
        </Modal.Footer>
        </Modal>
    );
};

export default LoginModal;
