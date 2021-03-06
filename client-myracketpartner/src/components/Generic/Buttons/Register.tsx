// DEPENDENCES
import React from "react";
import styled from 'styled-components';

// COMPONENTS
import RegisterModal from '../Modals/Register';

// STYLED-COMPONENTS
const Button = styled.button`
    padding: 5px 10px;
    background-color: #28657B;
    border: none;

    &:hover {
        background-color: #467586;
    }
`;

const RegisterButton = () => {
    const [show, setShow] = React.useState(false);

    return (
        <>
            <Button onClick={() => setShow(true)}>
                Register
            </Button>

            {/* Register Modal */}
            <RegisterModal show={show} setShow={setShow} />
        </>
    );
};

export default RegisterButton;
