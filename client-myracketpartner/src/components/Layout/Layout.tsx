// DEPENDENCES
import React from "react";

// COMPONENTS
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

// CSS
import './Layout.css';

const Layout = () => {
  return (
      <div className="layout">
        <Header />
        <Main />
        <Footer />
      </div>
  );
};

export default Layout;
