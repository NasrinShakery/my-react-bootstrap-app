import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

function Header() {
   return (
      <>
         <Row>
            <Col xs={12} lg={6}>
               <Image src="./images/beauty.png" fluid />
            </Col>

            <Col xs={12} lg={6}>
               <Card className="no-border dir-rtl">
                  <Card.Header>
                     یک روتین پوستی خوب چیست؟
                  </Card.Header>
                  <Card.Body>
                     <blockquote className="blockquote mb-0">
                        <p>
                           {" "}
                           روتین پوستی مناسب تمامی انواع پوست ها{" "}
                        </p>
                        <footer className="blockquote-footer">
                           Someone famous in{" "}
                           <cite title="Source Title">Source Title</cite>
                        </footer>
                     </blockquote>
                  </Card.Body>
               </Card>
               <Image src="./images/beauty1.png" fluid />
            </Col>
         </Row>
      </>
   );
}

export default Header;
