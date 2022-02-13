import React from 'react';
import { sliderItems } from "../data";
import { useState } from "react";

import { Link } from "react-router-dom";

function Slider() {
  return(
    <div className='Slider-Container'>
      <div className='Slider-Wrapper'>
        {sliderItems.map((item) => (
          <div className='Slider-Slide' bg={item.bg} key={item.id}>
            <div className='Slider-ImgContainer'>
              <img className='Slider-Image' src={item.img} />
              </div>
            <div className='Slider-InfoContainer'>
              <div className='Slider-Title'>{item.title}</div>
              <Link to="/register">
              <button className='Slider-Button'>REGISTER NOW</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
