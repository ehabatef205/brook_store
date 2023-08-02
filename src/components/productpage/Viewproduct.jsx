import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container} from "react-bootstrap";

import "./slider.css";
import Carousel from "react-bootstrap/Carousel";

  
function Viewproduct({ products, handleClick }) {
    const [childHeight, setChildHeight] = useState(0);
  
    useEffect(() => {
      const child1 = document.getElementById("child1");
      const child1Height = child1.offsetHeight;
      setChildHeight(child1Height);
    }, []);
  
 
  
    const { id } = useParams();
    console.log(id);
    console.log("Products:", products);
  
    const selected = products.find((product) => product.id === parseInt(id));
  
   
  
     
  return (
    <div
    className="viewcontainer justify-content-center my-3   "
    style={{ position: "relative", top: "70px" }}
  >
    <Container  id="parent" className=" justify-content-center ">
      <div className=" d-flex flex-wrap  " style={{ height: "fit-content" }}>
        <div
          id="child1"
          className="d-flex justify-content-center flex-wrap col-lg-7 col-12 "
          style={{ padding: "0px" ,height:"fit-content" }}
        >

           <div className="carousel-wrapper-view"

>

 <Carousel   controls={false}>
   {selected.images.map((image, index) => (
     <Carousel.Item key={index}    >
       <img        
         className="d-block w-100 "
         style={{height:"700px", objectFit: "contained" }}
         src={image.src}
         alt={image.alt}
       />
       
     </Carousel.Item>
   ))}
  
 </Carousel>
</div>
        </div>
        <div
          id="child2"
          className=" d-flex flex-wrap col-lg-5  col-12 "
          style={{
           
            overflow: "auto",
            boxSizing: "content-box",
            height: childHeight,
          }}
        >
         
           
        
              <div className="w-100">
                <div>
                <p className="" style={{ textAlign: "left", fontSize: "1.5rem" }}>
                  {selected.productname}
                </p> 
                </div>
              
                <div>
              <p>  <s className="mx-2 " style={{color:"red"}}> ${selected.old}</s> ${selected.price}</p>
                </div>
              
              <div>
 <p style={{color:"blue"}}>Eligible for Free Shipping! (Regular shipping rates still apply to non-eligible items in cart)</p>
              </div>
              <div
                className=" w-100 my-1 d-flex "
                style={{ fontSize: "18px" }}
              >
             
           { Array.isArray(selected.color) ? 
    selected.color.map((color, index) => (
      <i key={index} className={`bi bi-circle-fill mx-1 text-${color}`} />
    )) : null}
              </div>
              <div>
              <p style={{color:"red"}}>Final Sale - No Exchanges or Returns</p>
              </div>
              <hr></hr>
              <div className=" w-100">
            <button className="btn w-50" style={{backgroundColor:"#72be93"}}>add to cart</button>
           </div>
              
            </div>
         
           
      
         
           
            
          
        </div>
      </div>
    </Container>


    </div>
  )
}

export default Viewproduct
