import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import NavBar from './components/NavBar/NavBar';

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


