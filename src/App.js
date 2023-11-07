import React from "react";
import "./customStyle.css";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";

const App = () => {
   return (
      <>
         <Container>
            <Row>
               <NavBar></NavBar>
               <Header />
            </Row>
            {/* <main className="cardWrapper d-flex card-deck">
            
          
         </main> */}

            <Row className="cardWrapper d-flex justify-content-between">
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
            </Row>
         </Container>
      </>
   );
};

export default App;
