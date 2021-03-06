// DEPENDENCES
import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #28657B;
`;

const Header = () => {
  return (
      <Wrapper>
        <div>this is the new navbar</div>
      </Wrapper>
  );
};

export default Header;
