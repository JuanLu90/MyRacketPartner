// DEPENDENCES
import React from "react";
import styled from 'styled-components';

// COMPONENTS
import LoginButton from '../Generic/Buttons/Login';
import RegisterButton from '../Generic/Buttons/Register';

// STYLED-COMPONENTS
const Wrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 10px;
  background-color: #28657B;
`;

const Title = styled.span`
  margin-right: auto;
`;

const Header = () => {
  return (
      <Wrapper>
        <Title>My Racket Partner</Title>
        <LoginButton />
        <RegisterButton />
      </Wrapper>
  );
};

export default Header;
