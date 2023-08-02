
import { CartContext } from '../components/shoppingcart/shppingcartcontext'
import { CartItem } from "../components/shoppingcart/Cartitem";
import React, { useContext,useState,useEffect } from "react";
import { products } from "../components/data";

export const Totalprice = (props) => {
  const { id,price} = props.data;
  const {cartItems} =useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let total = 0;
    for (const productId in cartItems) {
      total += price * cartItems[productId];
    }
    setTotalPrice(total);
    console.log(total)
  }, [props]);
 
  return (
    <div>
      <p className="mx-5 bg-info">Total Price: ${totalPrice}</p>
    </div>
  )
}
const Cart = () => {

  const { cartItems} = useContext(CartContext);
 
  const isEmpty = Object.values(cartItems).every((value) => value === 0);
  console.log(isEmpty)
  console.log("h",cartItems)
  return (
  
 <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
<div className="offcanvas-header">
<h5 className="offcanvas-title" id="offcanvasExampleLabel">My Cart</h5>
<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div> 

<div className='offcanvas-body'>
          

            <div className='col-12'>
              <h1>Your Cart Items</h1>
            </div>

            {isEmpty ? (
              <div className="empty-message">Your cart is empty.</div>
            ) : (
              <div className="cart">
                {products.map((product) => {
                  if (cartItems[product.id] > 0) {
                    return <CartItem key={product.id} data={product} />;
                  }
                  return null;
                })}
              </div> 
         )}
         <div className='col-12'> 
         {/* {products.map((product) => {
                  if (cartItems[product.id] > 0) {
                    return <Totalprice data={product} />} 
                     return null;
                  })} */}
         <button className='btn w-75 mx-5 my-2' style={{backgroundColor:"#72be93"}}>Checkout</button>

        
           </div>
           </div>
   </div> 

      
  );
 };

export default Cart;
