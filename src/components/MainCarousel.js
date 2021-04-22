import React from 'react';

//Import needed components
import { Carousel } from 'react-responsive-carousel';
import { Container, makeStyles } from '@material-ui/core';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// import img1 from '../assets/img/img1.jpg';
// import img2 from '../assets/img/img2.jpg';
// import img3 from '../assets/img/img3.jpg';
// import img4 from '../assets/img/img4.jpg';
// import img5 from '../assets/img/img5.jpg';
// import img6 from '../assets/img/img6.jpg';
// import img7 from '../assets/img/img7.jpg';

import { Images } from '../data/images';


const useStyles = makeStyles({
  img: {
    width: 600,
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

            {/* <Container className={classes.img} >
                <img alt="" src={img1} className={classes.img}/>
                <p className="legend">Legend 1</p>
            </Container>
            <Container>
                <img alt="" src={img2} className={classes.img}/>
                <p className="legend">Legend 2</p>
            </Container>
            <Container>
                <img alt="" src={img3} className={classes.img}/>
                <p className="legend">Legend 3</p>
            </Container>
            <Container>
                <img alt="" src={img4} className={classes.img}/>
                <p className="legend">Legend 4</p>
            </Container>
            <Container>
                <img alt="" src={img5} className={classes.img}/>
                <p className="legend">Legend 5</p>
            </Container>
            <Container>
                <img alt="" src={img6} className={classes.img}/>
                <p className="legend">Legend 6</p>
            </Container>
            <Container>
                <img alt="" src={img7} className={classes.img}/>
                <p className="legend">Legend 7</p>
            </Container> */}
       </Carousel>

              
       )
}

export default MainCarousel;

