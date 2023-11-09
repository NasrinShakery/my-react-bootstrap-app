import React from "react";
import "./customStyle.css";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import ProductCards from "./components/ProductCard/ProductCards";

const App = () => {
   return (
      <>
         <Container>
            <Row>
               <NavBar></NavBar>
            </Row>

            
            <Row>
               <Header />
            </Row>
            
            <ProductCards />

            
         </Container>
      </>
   );
};

export default App;
