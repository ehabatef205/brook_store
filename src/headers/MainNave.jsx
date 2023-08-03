import React from 'react'
import SubNav from './SubNav';

function MainNave() {
  return (
    <div className='d-flex flex-wrap '>

      <nav className=" navbar navbar-expand-lg bg-body-tertiary mainnave col-6 col-lg-12 ">
        <div className="container-fluid  ">
          <div className=' col-12 col-lg-4 d-flex justify-content-center'>
            <a className="navbar-brand  col-12 d-flex justify-content-center " style={{ display: "flex", objectFit: "contain" }} href="/">
              <img className='logo w-25' style={{ height: "110px", imageRendering: " pixelated" }} src="logo.png"></img>
            </a>
          </div>
          <div className="col-12  col-lg-5 my-2" style={{ height: "6vh" }}>
            <div style={container}>
              <div className=" mx-3  my-2 ">
                <i className=" mx-2 bi bi-search-heart" style={{ fontSize: "1.5rem" }}></i>

              </div>
              <input
                placeholder='Search'
                style={{
                  height: "6vh",
                  color: "#000",
                  border: "none",
                  outline: "none",
                  textAlign: "right",
                  background: "#fff",
                  borderRadius: "15px",
                  width: "100%",
                }}
              />


            </div></div>
          <div className="col-12 col-lg-3">

            {/* <i className=" mx-2 bi bi-person"role="button"   href="/Login" style={{fontSize:"2rem"}}></i> */}
            <a href="/Login"> <i className="mx-2 bi bi-person text-black" role="button" style={{ fontSize: "2rem" }}></i>
            </a>
            <a href="/Wishlist"><i className=" mx-2 bi bi-heart text-black" role="button" style={{ fontSize: "2rem" }}></i></a>


          </div>
        </div>

      </nav>
      <div className="col-6 col-lg-12 d-flex justify-content-center small-screen-only">
        <SubNav ></SubNav>
      </div>
    </div>
  )
}

export default MainNave


const container = {
  display: "flex",
  backgroundColor: "white",
  paddingRight: "3%",
  marginRight: "3%",
  marginLeft: "3%",
  borderRadius: 5,
};

/*
/*<a >

              <i className=" mx-2 bi bi-cart " data-bs-toggle="offcanvas" href="#offcanvasExample"  role="button" aria-controls="offcanvasExample"  style={{fontSize:"2rem"}}></i>

              </a>*/