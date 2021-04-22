import React from 'react';

//Import needed components
import { Carousel } from 'react-responsive-carousel';
import { Container, makeStyles } from '@material-ui/core';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


import { Images } from '../data/images';


const useStyles = makeStyles({
  img: {
    width: 800,
  },
});


const MainCarousel = () => {

     const classes = useStyles();
     

     return (

        <Carousel showArrows={true} showThumbs={true} className={classes.img}>

            {Images.map((item, index) => (

                <div key={index}>
<                   img alt={item.legend} src={item.url} className={classes.img}/>
                     <p className="legend">{item.legend}</p>
                </div>
             ))        
            }
       </Carousel>

              
       )
}

export default MainCarousel;

