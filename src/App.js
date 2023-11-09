import React from "react";
import "./customStyle.css";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import ProductCards from "./components/ProductCard/ProductCards";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Shop from "./pages/Shop";

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
               <Route path="/ContactUs" element= {<ContactUs/>} />
               <Route path="/Login" element= {<Login/>} />
            </Routes>
            
         </Container>
      </>
   );
};

export default App;
