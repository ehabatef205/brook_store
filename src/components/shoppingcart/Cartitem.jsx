import { CartContext } from "./shppingcartcontext";
import React, { useContext ,useState,useEffect } from "react";
export const CartItem = (props) => {
  const { id, productname, price,images,old,color } = props.data;
  const { cartItems, addToCart, removeFromCart, decreaseQuantity } =
    useContext(CartContext);
    // const [totalPrice, setTotalPrice] = useState(0);
    // useEffect(() => {
    //   let total = 0;
    //   for (const productId in cartItems) {
    //     total += price * cartItems[productId];
    //   }
    //   setTotalPrice(total);
    // }, [cartItems, props]);
  console.log("sh", cartItems);
  
  return (
    <div className=" col-12 w-100 d-flex flex-wrap">
       
          <div className="col-5">
  <img src={images[0].src} className="w-100 h-75" alt={images[0].alt} />
</div>
             
              
    
      <div className="col-7 ">
        <div className="mx-2 ">
        <div>
          <b>{productname}</b>
        </div>
        <div className="my-2"><s className="mx-2 " style={{color:"red"}}> ${old}</s> ${price}</div>
        <div className="d-flex w-100 my-1">
          <div className="countHandler d-flex">
            <button  className='btn  w-25 ' style={{border:"0.5px solid gray"}}onClick={() => decreaseQuantity(id)}> - </button>
            <input className='btn  w-50'  style={{border:"0.5px solid gray"}}value={cartItems[id]} />
            <button className='btn  w-25'  style={{border:"0.5px solid gray"}} onClick={() => addToCart(id)}> + </button>
          </div>
        </div>
        <div className="my-2">
          {color.map((color, index) => (
      <i key={index} className={`bi bi-circle-fill text-${color}`} />
    ))
  }
  </div>
        <div>
          <button  className="my-2 btn btn-outline-secondary" onClick={() => removeFromCart(id)}>remove</button>
        </div>
        <div><p style={{color:"red"}}>Final Sale - No Exchanges or Returns</p>
        <p> price {price * cartItems[id]}</p> </div>
     
       
      </div></div>
      <hr></hr>

    </div>
  );
};

// export const Totalprice = (props) => {
  //   const { id,price} = props.data;
  //   const {cartItems} =useContext(CartContext);
  //   const [totalPrice, setTotalPrice] = useState(0);
  //   useEffect(() => {
  //     let total = 0;
  //     for (const productId in cartItems) {
  //       total += price * cartItems[productId];
  //     }
  //     setTotalPrice(total);
  //   }, [cartItems, props]);
  //   return (
  //     <div>
  //       <p className="mx-3">Total Price: ${totalPrice}</p>
  //     </div>
  //   )
  // }