import React from "react";
import { Row } from "react-bootstrap";
import Header from "../components/Header/Header";
import ProductCards from "../components/ProductCard/ProductCards";
const Home = () => {
   return (
      <>
         <Row>
            <Header />
         </Row>

         <ProductCards />
      </>
   );
};

export default Home;
