import React, { useState, useEffect, useContext } from "react";
import "../productpage/slider.css";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
//  import { useNavigate } from "react-router-dom";
import { CartContext } from "../shoppingcart/shppingcartcontext";
    export const Wishlistitem = (props) => {
      
    const { id, productname, price,images,old,color } = props.data;
    const { wishItems,
    addToWishlist,
    removeFromWishlist} =useContext(CartContext);
    console.log("www", wishItems);
    
    // const navigate = useNavigate();
    // const [selectedProduct, setSelectedProduct] = useState(null);
  
    // const handleImageClick = (product) => {
    //   setSelectedProduct(product);
    //   navigate(`/Cart`);
    // };
  
  return (


   <div className=" m-2   ">
   
      <div
        className=" my-1  "
        
      >
        <div className="carousel-wrapper"

         >
          <Carousel
          
          controls={false} 
        //   onClick={() => handleImageClick(product)}
          >
          
              <Carousel.Item    >
                 <img src={images[0].src} className="w-100 " 
                    style={{height:"250px", objectFit: "contained" }}
                    alt={images[0].alt} />

                
              </Carousel.Item>
                
          </Carousel>
          <div className="caption p-2 position-absolute bottom-0 w-100 " >
                <i className="bi bi-heart text-light mx-3"></i>
               <a  href="#">
                <i className="bi bi-cart text-light"></i>
                </a> 

                </div>
        </div>
         <div
          className="card-body my-2 d-flex"
          style={{ fontSize: "0.8rem", padding: "0px" }}
        >
          <div className=" mx-2  d-flex flex-column align-items-start">
         
            <Card.Text className="mb-0 text-secondary">{productname}</Card.Text>
            <Card.Text className="mb-0"><s className="mx-2 " style={{color:"red"}}> ${old}</s> ${price}</Card.Text>
         
 
            <Card.Text className="mb-0"> 
{Array.isArray(color) ? 
  color.map((color, index) => (
    <i key={index} className={`bi bi-circle-fill text-${color}`} />
  )) : null
}
</Card.Text>
            <Card.Text > <p style={{color:"red"}}>Final Sale - No Exchanges or Returns</p></Card.Text>
            
            <Card.Text className="mb-0">
              <button  className="btn "
            //    onClick={() => addToCart(id)}
             > cart</button></Card.Text>
            
          </div>
        
      </div>
      </div>
  </div>
)
} 
 
export default Wishlistitem
