import React from 'react';
import { Box, Stack, Typography,Button} from "@mui/material";
import { error } from 'ajv/dist/vocabularies/applicator/dependencies';
import HeroBannerImage from '../assets/images/banner.png' ;

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: {lg: '212px', xs:'70px'},
        ml: {sm: '50px'} 
    }} position="relative" p='20px'>
        <Typography color="#FF2625"
            fontweight="600" fontSize="26px">
            Fitness club
        </Typography>
        <Typography fontweight={700}
        sx={{fontSize:{lg:'44px', xs:'40px'}}}>
            Sweat,Smile <br /> and React
        </Typography>
        <Typography fontSize="22px"
        lineHeight="35px" mb={3}>
            Check out the most effective exercise
        </Typography>
        <Button variant='contained'
        color="error" href="#exercises">Explore Exercises </Button>
        <Typography 
          fontweight={600}
          color="#ff2625"
          sx={{
            opacity:0.1,
            display:{lg:'black',xs:'none'}
          }}>Exercises</Typography>
        <img src={HeroBannerImage} alt="banner"
        className='hero-banner-img'/>    
        </Box>
  )
}

export default HeroBanner