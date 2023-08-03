import { products } from "../data";
import React, { useState, useEffect, useContext } from "react";

import "./slider.css";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../shoppingcart/shppingcartcontext";


export function CardsSlider() {

  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(CartContext);

  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleImageClick = (product) => {
    setSelectedProduct(product);
    //navigate(`/Cart`);
    navigate(`/Viewproduct/${product.id}`);
  };




  return (
    <div className="containe d-flex  flex-wrap mx-1 ">
      {products.map((product) => (
        <div
          className=" my-1"
          key={product.id}

        >
          <div className="carousel-wrapper"

          >

            <Carousel

              controls={false}
              onClick={() => handleImageClick(product)}
            >
              {product.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 "
                    style={{ height: "265px", objectFit: "contained" }}
                    src={image.src}
                    alt={image.alt}
                  />

                </Carousel.Item>
              ))}

            </Carousel>
            {/* <Nave></Nave> */}
            <div className="caption position-absolute bottom-0 w-100  " >
              {/* <button }> */}

              <i className="bi bi-cart text-light mx-5" onClick={() => addToCart(product.id)} role="button " style={{ fontSize: "1.8rem", fontWeight: "bold", cursor: "pointer" }}></i>


              {/* <button  onClick={() => addToWishlist(product.id)} > */}
              <i onClick={() => addToWishlist(product.id)} role="button " className="bi bi-heart mx-5  text-light" style={{ fontSize: "1.8rem", fontWeight: "bold", cursor: "pointer" }}></i>

              {/* </button> */}
            </div>


          </div>


          <div
            className="card-body my-2 d-flex"
            style={{ fontSize: "0.8rem", padding: "0px" }}
          >

            <div className=" mx-2  d-flex flex-column align-items-start">

              <Card.Text className="mb-0 text-secondary">{product.productname}</Card.Text>
              <Card.Text className="mb-0"><s className="mx-2 " style={{ color: "red" }}> ${product.old}</s> ${product.price}</Card.Text>

              <Card.Text className="mb-0">
                {Array.isArray(product.color) ?
                  product.color.map((color, index) => (
                    <i key={index} className={`bi bi-circle-fill text-${color}`} />
                  )) : null
                }
              </Card.Text>
              <Card.Text > <p style={{ color: "red" }}>Final Sale - No Exchanges or Returns</p></Card.Text>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}