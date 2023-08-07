
import React from 'react';
import './homeslider.css';
import Carousel from "react-bootstrap/Carousel";
function Homeslider() {
    const src = [
        "https://images.pexels.com/photos/317377/pexels-photo-317377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ]
  return (
    <div className=' d-flex justify-content-center '>
      <div
        className='d-flex flex-wrap '
        style={{
          height: 'fit-content',
          maxWidth: '1500px',
         
          marginTop: '3vw',
        }}
      >
        <div className='leftside col-12 col-lg-6'
        style={{
          height: '700px'}}>
        <div
      id="carouselExample"
      className="carousel slide w-100 h-100 "
      style={{ justifyContent:"center" }}
    >
      <div
        className="carousel-inner w-100  d-flex justify-content-center h-100"
      >
        <Carousel   style={{
          height: '700px',width:"97%"}} interval={3000}>
            {src.map((image, index) => (
                <Carousel.Item key={index}>
                <img  style={{
          height: '700px'}}
                className='w-100 '
                    src={image}
                    alt={""}
                />
              
  <div className="carousel-caption d-none d-md-block">
    <h3> carousel-caption </h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cupiditate voluptatum nostrum id atque, ea modi eligendi sapiente. Perspiciatis ad natus corporis magnam animi molestia
        e accusantium similique ab veniam necessitatibus.</p>
  </div>
       </Carousel.Item>
            ))}
            </Carousel>
      </div>
      </div>
        </div>

        <div
          className=' col-lg-6 col-12  d-flex flex-wrap rightside'
          style={{ height: '700px' }}
        >
          <div
            className='w-100 col-12'
            style={{ height: 'calc(50% + 38px)', marginBottom: '3%' }}
          >
            <img
              className='h-100 w-100'
              src='https://images.pexels.com/photos/17424774/pexels-photo-17424774/free-photo-of-wood-nature-bird-red.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Right Top Slide'
            />
          </div>
          <div
            className='col-12  d-flex flex-wrap'
            style={{ height: 'calc(50% - 60px)' }}
          >
            <div
              className='col-12 col-lg-6 h-100  leftsubside'
              style={{ width: 'calc(50% - 15px)', marginRight: '4%' }}
            >
              <img
                className='h-100 w-100'
                src='https://images.pexels.com/photos/12480410/pexels-photo-12480410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='Right Bottom Left Slide'
              />
            </div>

            <div
              className='col-12 col-lg-6 h-100 rightsubside'
              style={{ width: 'calc(50% - 15px)' }}
            >
              <img
                className='h-100 w-100'
                src='https://images.pexels.com/photos/12480410/pexels-photo-12480410.jpeg'
                alt='Right Bottom Right Slide'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homeslider;