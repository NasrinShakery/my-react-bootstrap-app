import React,{useState} from "react";
import { Row, } from "react-bootstrap";
import ProductCard from "./ProductCard";
import productData from "../../productData";

const ProductCards = () => {
   const [products, setProducts] = useState(productData);
   return (
      <>
         <Row className="cardWrapper d-flex justify-content-between">
            {products.map(productCard => (<ProductCard />))}
         </Row>
      </>
   );
};

export default ProductCards;
