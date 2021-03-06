// DEPENDENCES
import React from "react";
import styled from 'styled-components';

// COMPONENTS
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const Wrapper = styled.div`
   background-color: #28657B;
`;

const Layout = () => {
  return (
      <Wrapper>
        <Header />
        <Main />
        <Footer />
      </Wrapper>
  );
};

export default Layout;
