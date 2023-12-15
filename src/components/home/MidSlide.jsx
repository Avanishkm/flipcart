import { Box, styled } from '@material-ui/core'
import React from 'react'
import Slide from './Slide'

const Component = styled(Box)`
    display: flex;
    
`;
const LeftComponent = styled(Box)`
    width: 83%;
`;
const RightComponent = styled(Box)`
    background: #FFFFFF;
    padding: 5px;
    margin-top: 10px;
    margin-left: 10px;
    width: 17%;
    text-align: center;
    
`

const MidSlide = ({ products, title, timer }) => {
    
  return (
    <Component>
        <LeftComponent>
            <Slide products={products} title={title} timer={timer}/>
        </LeftComponent>
        <RightComponent>
        </RightComponent>
    </Component>
  )
}

export default MidSlide