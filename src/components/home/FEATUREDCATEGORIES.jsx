import React from 'react'
import{ FEATUREDCATEGORIESdata } from "../data";
function FEATUREDCATEGORIES() {
  return (<div>
    <div className='my-4  aligncenter'>
       <h1>FEATURED CATEGORIES</h1>
       </div>
       <div className=' d-flex justify-content-center'>
    <div className='d-flex flex-wrap justify-content-between ' style={{maxWidth:"1700px", minWidth:"200px", height:"fit-content"}}>
    {FEATUREDCATEGORIESdata.map(category => (
      <div key={category.id} className='col-lg-2 col-6 my-3 ' style={{height:"11rem" ,textAlign:"center"}}>
        <img className='h-100 my-2 ' src={category.imageurl} alt="" style={{width:"11.25rem"}} />
        <p>ddd </p>
      </div>
    ))}
  </div></div>
       </div>
  
  )
}

export default FEATUREDCATEGORIES