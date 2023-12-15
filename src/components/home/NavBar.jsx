import React from 'react'
import "./navbar.css"
import categoriesData from '../../constants/categoriesData'
import ExpandableDropdown from '../cart/ExpandableDropdown'
import electrictyData from '../../constants/electricty'
import beautiData from '../../constants/beauti'

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='nav_child'>
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" alt="Top Offers" />
        <p className='para'>Top Offers</p> 
      </div>
      <div className='nav_child'>
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" alt="Top Offers" />
        <p className='para'>Grocery</p> 
      </div>
      <div className='nav_child'>
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt="Top Offers" />
        <p className='para'>Mobile</p> 
      </div>
      <div className='nav_child'>
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100" alt="Top Offers" />
         <ul className='ul'>
          {categoriesData.map((category) => (
            <ExpandableDropdown key={category.id} category={category} />
          ))}
        </ul>
      </div>
      <div className='nav_child'>
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="Top Offers" />
        <ul className='ul'>
          {electrictyData.map((category) => (
            <ExpandableDropdown key={category.id} category={category} />
          ))}
        </ul>
      </div>
      <div className='nav_child'>
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100" alt="Top Offers" />
        <p className='para'>Home</p> 
      </div>
      <div className='nav_child'>
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" alt="Top Offers" />
        <p className='para'>Appliances</p> 
      </div>
      <div className='nav_child'>
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" alt="Top Offers" />
        <p className='para'>Travel</p> 
      </div>
      <div className='nav_child'>
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" alt="Top Offers" />
        <ul className='ul'>
          {beautiData.map((category) => (
            <ExpandableDropdown key={category.id} category={category}  />
          ))}
        </ul>
      </div>

    </div>
  )
}

export default NavBar