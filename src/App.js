import React from "react";
import "./customStyle.css";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/NavBar/NavBar";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";

const App = () => {
   return (
      <>
         <Container>
            <Row>
               <NavBar></NavBar>
            </Row>

            <Routes>
               <Route path="/" element= {<Home/>} />
               <Route path="/Shop" element= {<Shop/>} />
               <Route path="/product/:productID" element= {<ProductDetails/>} />
               <Route path="/ContactUs" element= {<ContactUs/>} />
               <Route path="/Login" element= {<Login/>} />
               <Route path="*" element={<NotFound/>}/>
            </Routes>
            
         </Container>
      </>
   );
};

export default App;
