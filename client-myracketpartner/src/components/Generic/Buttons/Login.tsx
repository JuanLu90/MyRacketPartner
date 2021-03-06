// DEPENDENCES
import React from "react";
import styled from 'styled-components';

// COMPONENTS
import LoginModal from '../Modals/Login';

// STYLED-COMPONENTS
const Button = styled.button`
    padding: 5px 10px;
    background-color: #28657B;
    border: none;

    &:hover {
        background-color: #467586;
    }
`;

const LoginButton = () => {
    const [show, setShow] = React.useState(false);

    return (
        <>
            <Button onClick={() => setShow(true)}>
                Login
            </Button>

            {/* Login Modal */}
            <LoginModal show={show} setShow={setShow} />
        </>
    );
};

export default LoginButton;
