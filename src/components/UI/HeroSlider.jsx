import React from 'react'
import {Container} from 'reactstrap'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import '../../Styles/HeroSlider.css'

function HeroSlider() {
    const settings =  {
        fade: true,
        speed: 2000,
        autoPlaySpeed: 3000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false  }
    

  return (
  
     <Slider {...settings} className='hero_slider'>
        <div className="slider_item slider_item-01 mt0">
            <Container>
                <div className="slider_content">
                    <h6 className="text-light mb-3">For Rent $70 Per Day</h6>
                    <h1 className="text-light mb-4">Reserve Now And Get 50% off</h1>
                    <button className="btn reserve_btn mt-4">
                        <Link to="/cars">Reserve Now</Link>
                    </button>
                </div>
            </Container>
        </div>

        <div className="slider_item slider_item-02 mt0">
            <Container>
                <div className="slider_content">
                    <h6 className="text-light mb-3">For Rent $70 Per Day</h6>
                    <h1 className="text-light mb-4">Reserve Now And Get 50% off</h1>
                    <button className="btn reserve_btn mt-4">
                        <Link to="/cars">Reserve Now</Link>
                    </button>
                </div>
            </Container>
        </div>
         <div className="slider_item slider_item-03 mt0">
            <Container>
                <div className="slider_content">
                    <h6 className="text-light mb-3">For Rent $70 Per Day</h6>
                    <h1 className="text-light mb-4">Reserve Now And Get 50% off</h1>
                    <button className="btn reserve_btn mt-4">
                        <Link to="/cars">Reserve Now</Link>
                    </button>
                </div>
            </Container>
        </div>

    </Slider>
  
  )
}

export default HeroSlider