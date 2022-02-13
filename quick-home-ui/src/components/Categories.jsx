import React from 'react';
import { categories } from "../data";
import { Link } from "react-router-dom";

function Categories() {
  return (
  <div>
      <div className='Categories-Container1'>
      {categories.map((item) => (
       <div className='Categories-Container2'>
       <img className='Categories-Image' src={item.img} />
        <div className='Categories-Info'>
          <div className='Categories-Title'>{item.title}</div>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <div className='Categories-Button'>BOOK NOW</div>
            </Link>
        </div>
     </div>
      ))}
    </div>
  </div>
  );
}

export default Categories;
