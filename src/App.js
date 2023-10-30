import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import NavBar from './components/NavBar/NavBar';
import './customStyle.css';

const App = () => {
  return (
    <>
      <Container>
         <Row>
            <NavBar></NavBar>
            <Col></Col>
            <Col></Col>
         </Row>
      </Container>
    </>
  )
}

export default App


