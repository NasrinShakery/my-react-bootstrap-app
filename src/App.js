import React from "react";
import "./customStyle.css";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/NavBar/NavBar";
import {useRoutes} from "react-router-dom";
import routes from "./routes";


const App = () => {
   let router = useRoutes(routes); 
   return (
      <>
         <Container>
            <Row>
               <NavBar></NavBar>
            </Row>

           {router}
            
         </Container>
      </>
   );
};

export default App;
