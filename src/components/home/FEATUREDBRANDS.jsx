import React from 'react'
import { ResponsiveFeaturedBrands, FeaturedBrandsdata } from "../data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function FEATUREDBRANDS() {

  return (
    <div>
      <hr></hr>
      <div className='my-4 aligncenter ' >
        <h2>FEATUREDBRANDS</h2>
      </div>
      {/* <div  className=' d-flex justify-content-center '  style={{maxWidth:"1300px", height:"350px", marginLeft: '16vw',marginRight: '16vw'}}>
    <Carousel 
     className="h-100 w-100"
    infinite={true}
    // showDots={true}
    // style={{borderRadius:"50px"}}
    responsive={ResponsiveFeaturedBrands}
    >
         {FeaturedBrandsdata.map(category => (
        <div className=" h-100 w-100 " style={{borderRadius:"20%"}}>
       
           <img className=" h-100"  src={category.imageurl} style={{borderRadius:"20%",width:"20rem", marginLeft: '1rem',marginRight: '1rem'}} />
           </div>))}
          </Carousel>
         
        </div> */}

      <div className=' d-flex justify-content-center ' style={{ height: "350px", textAlign: 'center', marginLeft: '16vw', marginRight: '16vw' }}>
        <Carousel
          className="h-100 brandcenter   "
          infinite={true}

          responsive={ResponsiveFeaturedBrands}
        >
          {FeaturedBrandsdata.map((category, index) => (
            <div key={index} className=" h-100 col-12" style={{ width: "25rem", textAlign: "center" }}>

              <img className=" h-100 " src={category.imageurl} style={{ width: "94%", marginLeft: '3%', marginRight: '3%' }} />
            </div>))}
        </Carousel>

      </div>

    </div>
  )
}






