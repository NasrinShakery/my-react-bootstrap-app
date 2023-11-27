import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function ProductCard(props) {
   return (
      <LinkContainer to={`/product/${props.id}`}>
         <Col lg={4} md={6} xs={12} className="">
            <Card style={{ width: "100%" }} className="">
               <Card.Img variant="top" src={props.img} />
               <Card.Body>
                  <Card.Title>{props.name}</Card.Title>
                  <Card.Text>
                     Some quick example text to build on the card title and make
                     up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
               </Card.Body>
            </Card>
         </Col>
      </LinkContainer>
   );
}

export default ProductCard;
