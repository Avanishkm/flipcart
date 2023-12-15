import React, {  useState } from 'react';
import "./header.css";
import { Search } from '@material-ui/icons';

import { products } from '../../constants/data';
import DarkMood from './DarkMode';


const Header = () => {
   
    const [value, setValue] = useState('');

    const onChange = (event)=> {
      setValue(event.target.value)
    }

    const onSearch = (searchTerm) => {
      setValue(searchTerm)
      console.log('search', searchTerm);
    }
    


  return (
    <>
    <div className='header'>
        <div className="first">
        <img
          src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png"
          alt="Flipkart"
        />
        <div className="first1">
          <span
            style={{
              fontSize: "11px",
              paddingRight: "2px",
              color: "white",
              fontStyle: "italic",
            }}
          >
            Explore
          </span>
          <span
            style={{
              color: "#F9E107",
              fontSize: "11px",
              fontStyle: "italic",
            }}
          >
            Plus
          </span>
          <span>
            <img
              width="10"
              className="logo"
              src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png"
              alt=""
            />
          </span>
        </div>
      </div>
      <div className="second">
        <input
         type="text" placeholder="Search for products,brands and more"
         value={value}
         onChange={onChange}
         />
        <Search onClick={()=> onSearch(value)} />
        
      </div> 
      <div className='dropdown'>
        {products.filter(item => {
          const searchTerm = value.toLowerCase();
          const fullName = item.title.shortTitle.toLowerCase();
          return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm
        }).slice(0,10)
        .map((item)=> <div onClick={() => onSearch(item.title.shortTitle)} className='dropdown-row' key={item.title.shortTitle}>
          {item.title.shortTitle}
          </div>
          )}
      </div>
      <div className='darkmode'>
        <div className="item">
          <div className="mode"><DarkMood /></div>
          <h4>Theme</h4>
        </div>
      </div>
      <div className="fifth">
        <img src="data:image/png;base64,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" alt="" />
        <p style={{ color: "white", fontWeight: "600" }}>Cart</p>
      </div>    
      
    </div>
    
  </>

  )
}

export default Header