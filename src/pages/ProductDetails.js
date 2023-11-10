import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import productData from "../productData";
// import Image from "react-bootstrap/Image"
// import { Container, Row, Col } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

const ProductDetails = () => {
   let [products, setProducts] = useState(productData);
   let params = useParams();
   let hasParams = products.some((product) => product.id == params.productID);
   // let img = products.find((product) => product.id === params.productID).img;
   return (
      <>

         {!hasParams ? (
            <>
               {console.log(hasParams)}
               <Navigate to="/" />
            </>
         ) : (
            <>
               <div>ProductDetails</div>
               <h1>{params.productID}</h1>
               product :
               {products.find((product) => product.id == params.productID).name}
               <br />
               {/* img: {img} */}
               <br />
               <Container>
                  <Row>
                     <Col xs={6} md={4}>
                        {/* <Image src={img} rounded /> */}
                     </Col>
                     <Col xs={6} md={4}>
                        <Image src="./images/product4.jpg" roundedCircle />
                     </Col>
                     <Col xs={6} md={4}>
                        <Image src="holder.js/171x180" thumbnail />
                     </Col>
                  </Row>
               </Container>
            </>
         )}
      </>
   );
};

export default ProductDetails;
