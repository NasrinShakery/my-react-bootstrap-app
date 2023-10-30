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
               <Card className="no-border">
                  <Card.Header>
                     What is a perfect daily skin care routine?
                  </Card.Header>
                  <Card.Body>
                     <blockquote className="blockquote mb-0">
                        <p>
                           {" "}
                           Daily Skin Care Routine for All Skin Types | Plum
                           Goodness Daytime Skin Care Routine Step 1: Cleanse
                           Step 2: Tone Step 3: Treat Step 4: Moisturize Step 5:
                           Protect Nighttime  A daily skin care routine
                           is an important part of maintaining healthy, radiant
                           skin..{" "}
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
