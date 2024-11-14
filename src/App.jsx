import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import GlobalStyle from './style/GlobalStyle';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle/>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
