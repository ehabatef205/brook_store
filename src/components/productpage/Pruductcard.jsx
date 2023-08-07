import { products } from "../data";
import React, { useState, useEffect, useContext } from "react";
import getFaction from "../../api/basis/productsbycategory";
import "./slider.css";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import addCart from "../../api/basis/addCart"
import addWish from "../../api/basis/addWish"
import { CartContext } from "../shoppingcart/shppingcartcontext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function CardsSlider() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(CartContext);

  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleImageClick = (product) => {
    setSelectedProduct(product);
    navigate(`/Viewproduct/${product._id}`);
  };

  const [prod_by_cat, setProdByCat] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (id) {
      setLoading(true)
      getFaction(id).then(res => {
        setLoading(false)
        setProdByCat(res.data)
      }).catch((error) => {
        setLoading(false)
      })
    }
  }
    , [id])

  const addC = (product_id) => {
    if (localStorage.getItem("AuthBrook") === null) {
      toast.warn("Please login first", {
        position: toast.POSITION.TOP_RIGHT
      })
    } else {
      addCart(product_id).then(res => {
        if (res.data.message === "This product is already in cart") {
          toast.error(res.data.message, {
            position: toast.POSITION.TOP_RIGHT
          })
        } else {
          console.log(res.data)
        }
      })
    }
  }

  const addW = (product_id) => {
    if (localStorage.getItem("AuthBrook") === null) {
      toast.warn("Please login first", {
        position: toast.POSITION.TOP_RIGHT
      })
    } else {
      addWish(product_id).then(res => {
        if (res.data.message === "This product is already in wish") {
          toast.error(res.data.message, {
            position: toast.POSITION.TOP_RIGHT
          })
        } else {
          console.log(res.data)
        }
      })
    }
  }

  return (
    <div className="containe d-flex  flex-wrap mx-1 ">
      {prod_by_cat.map((product) => (
        <div
          className=" my-1"
          key={product._id}
        >
          <div className="carousel-wrapper">
            <Carousel controls={false} onClick={() => handleImageClick(product)}>
              {product.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 "
                    style={{ height: "265px", objectFit: "contained" }}
                    src={image}
                  />

                </Carousel.Item>
              ))}
            </Carousel>
            <div className="caption position-absolute bottom-0 w-100  " >
              <i className="bi bi-cart text-light mx-5" onClick={() => addC(product._id)} role="button " style={{ fontSize: "1.8rem", fontWeight: "bold", cursor: "pointer" }}></i>
              <i onClick={() => addW(product._id)} role="button " className="bi bi-heart mx-5  text-light" style={{ fontSize: "1.8rem", fontWeight: "bold", cursor: "pointer" }}></i>
            </div>
          </div>
          <div
            className="card-body my-2 d-flex"
            style={{ fontSize: "0.8rem", padding: "0px" }}>
            <div className=" mx-2  d-flex flex-column align-items-start">
              <Card.Text className="mb-0 text-secondary">{product.name}</Card.Text>
              <Card.Text className="mb-0"><s className="mx-2 " style={{ color: "red" }}> ${product.price_before}</s> ${product.price_after}</Card.Text>

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
      <ToastContainer />
    </div>
  );
}