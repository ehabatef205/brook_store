import { CartContext } from '../components/shoppingcart/shppingcartcontext'
import { Wishlistitem } from "../components/shoppingcart/Wishlistitem";
import React, { useContext } from "react";
import { products } from "../components/data";

const Wishlist = () => {

  const { wishItems } = useContext(CartContext);
  const isEmpty = Object.values(wishItems).every((value) => value === 0);
  console.log(isEmpty)
  console.log("w", wishItems)
  
  return (
    <div className='' style={{
      width: "76%",
      marginLeft: "12%",
      marginRight: "12%",
    }}>

      <div>
        <h1>Wishlist</h1>
      </div>

      {isEmpty ? (
        <div className="empty-message">Your cart is empty.</div>
      ) : (
        <div className="d-flex  w-100  flex-wrap">
          {products.map((product) => {
            if (wishItems[product.id] > 0) {
              return <div className=' ' key={product.id}
              // style={{width :"20%"}}
              ><Wishlistitem data={product} /></div>
            }
            return null;
          })}
        </div>
      )}
    </div>
  )
}

export default Wishlist
