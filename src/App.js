import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import NavBar from './components/NavBar/NavBar';
import './customStyle.css';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <Container>
         <Row>
            <NavBar></NavBar>
            <Header/>
         </Row>
      </Container>

    </>
  )
}

export default App


