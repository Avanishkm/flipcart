import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { products } from '../../constants/data';
import Countdown from 'react-countdown';
import { Box, Button, Divider, Typography } from '@mui/material';
import styled from 'styled-components';


const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const Component = styled(Box)`
    margin-top: 10px;
    background-color: #FFFFFF;
  `

  const Deal = styled(Box)`
    padding: 15px 20px;
    display: flex;

  `

  const Timer = styled(Box)`
    display: flex;
    margin-left: 10px;
    align-items: center;
    color: #7f7f7f;
  `
  const DealText = styled(Typography)`
    font-size:22px;
    font-weight: 600;
    margin-right: 25px;
    line-height: 22px;
  `

  const ViewAllButton = styled(Button)`
    margin-left: auto;
    background-color: #2874f0;
    border-radius:2px;
    font-size:14px;
    font-weight:400;
  `
  
  const Image = styled('img')({
    width:'auto',
    height: 150
  })
  const Text = styled(Typography)`
  
    font-size:14px;
    margin-top:5px;
  `
    
  

const Slide = ({title , timer}) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({ hours, minutes, seconds }) => {
        return <Box variant="span">{hours} : {minutes} : {seconds} Left</Box>

    }
  return (
    <Component>
        <Deal>
            <DealText>{title}</DealText>
            {
                timer && 
                <Timer>
                    <img className='timerImg' src={timerURL} alt="timer" style={{ width: 24}} />
                    <Countdown date={Date.now() + 5.04e+7} renderer={renderer}/>
                </Timer>
            }
            
            <ViewAllButton variant='contained' color='primary'>view All</ViewAllButton>
        </Deal>
        <Divider/>
        <Carousel
            responsive={responsive}
            swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        centerMode={true}
        slidesToSlide={1}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        >
            {
                products.map(data => (
                    <Box textAlign="center" style={{ padding: '25px 15px'}} key={data.id}>
                        <Image src={data.url} alt="banner" />
                        <Text style={{ fontWeight: 600, color: '#212121'}}>{data.title.shortTitle}</Text>
                        <Text style={{ color: 'green'}}>{data.discount}</Text>
                        <Text style={{ color: '#212121', opacity: '.6'}}>{data.tagline}</Text>
                    </Box>
                ))
            }
        </Carousel>
    </Component>
  )
}

export default Slide;