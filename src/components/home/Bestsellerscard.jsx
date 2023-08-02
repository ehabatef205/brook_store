import React from 'react'

import '../style/onebyoneslider.css'
function Bestsellerscard(props) {
    
  
    return (
 
      <div
       className="bg-light  aligncenter " 
      style={{width:"20rem",marginLeft:"80px" ,textAlign:"center"}}
    
      >
        <img className="product--image" src={props.imageurl} alt="product image" />
        <p style={{color:"gray"}} className='my-2'>{props.description}</p>
        <p  style={{color:"gray"}}className="">{props.price}</p>
       
      </div>
    )
  }
  
export default Bestsellerscard
