import React, { useState } from 'react';
import "./home.css"
import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
import { products } from '../../constants/data';
import MidSlide from './MidSlide';


// const categoriesData = [
//     {
//       id: 1,
//       name: 'Electronics',
//       subcategories: [
//         { id: 101, name: 'Laptops' },
//         { id: 102, name: 'Smartphones' },
//         { id: 103, name: 'Headphones' },
//       ],
//     },
//     {
//       id: 2,
//       name: 'Clothing',
//       subcategories: [
//         { id: 201, name: 'Men\'s Clothing' },
//         { id: 202, name: 'Women\'s Clothing' },
//         { id: 203, name: 'Accessories' },
//       ],
//     },
//     {
//       id: 3,
//       name: 'Home and Furniture',
//       subcategories: [
//         { id: 301, name: 'Living Room' },
//         { id: 302, name: 'Bedroom' },
//         { id: 303, name: 'Kitchen' },
//       ],
//     },
//   ];

const Home = () => {

    // const [hoveredCategory, setHoveredCategory] = useState(null);

    // const handleCategoryHover = (category) => {
    //     setHoveredCategory(category);
    //   };
    
    //   const handleCategoryLeave = () => {
    //     setHoveredCategory(null);
    //   };
  return (
    <>
        <div>
            <NavBar/>
            <div className='bannerBox'>
                <Banner/>
                <MidSlide products={products} title="Deal of the Day" timer={true}/>
                <Slide products={products} title="Discounts for you" timer={false}/>
                <Slide products={products} title="Suggesting Items" timer={false}/>
                <Slide products={products} title="Top Selection" timer={false}/>
                <Slide products={products} title="Recommended Items" timer={false}/>
                <Slide products={products} title="Trending Offers" timer={false}/>
                <Slide products={products} title="Top Deals on Accessories" timer={false}/>
            </div>
        </div>
    </>
    // <div className="home-page">
    //   <div className="category-list">
    //     <div className='item-list'>
    //       {categoriesData.map((category) => (
    //         <div key={category.id}>
    //           <div
    //             className={`category-item ${hoveredCategory === category ? 'hovered' : ''}`}
    //             onMouseEnter={() => handleCategoryHover(category)}
    //             onMouseLeave={handleCategoryLeave}
    //           >
    //             {category.name}
    //           </div>
    //           {hoveredCategory === category && (
    //             <div className="subcategory-list">
    //               {category.subcategories.map((subcategory) => (
    //                 <li key={subcategory.id}>{subcategory.name}</li>
    //               ))}
    //             </div>
    //           )}
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  )
}

export default Home