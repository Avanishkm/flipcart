import React from 'react';
import "./home.css"
import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
import { products } from '../../constants/data';
import MidSlide from './MidSlide';

const Home = () => {
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
  )
}

export default Home