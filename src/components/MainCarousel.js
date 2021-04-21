
import React from 'react';

//Import needed components
import { Container, Typography } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import MainCard from './MediaCard';

//Import needed styles
import '../assets/scss/carousel.scss';
import '../assets/scss/main.scss';
import '../assets/scss/presentation.scss';


import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.jpg';
import img4 from '../assets/img/img4.jpg';
import img5 from '../assets/img/img5.jpg';
import img6 from '../assets/img/img6.jpg';
import img7 from '../assets/img/img7.jpg';


const MainCarousel = () => {
    return (
    <Container >
    
    <Typography gutterBottom variant='h3' align='center'>  React Carrousel </Typography>
    <Carousel>
        <Container className='lengend'>
            <MainCard title='Image 1' 
                      image={img1} 
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />    
        </Container>
        <Container>
            <MainCard title='Image 2' 
                      image={img2} 
                      description="And the Congress may at any time by Law make or alter such Regulations, except as to the Congress Information of the President from Office, or of his Death, Resignation, or Inability to discharge the Powers and Duties of the Number of Representatives shall chuse their other Officers, and also a President of the first Class shall be repassed by two thirds of both Houses shall be sitting."
                   />    
        </Container>
        <Container>
            <MainCard title='Image 3' 
                      image={img3} 
                      description="Das Rahmenkonzept reduziert den Ermessensspielraum von Banken, die die auf internen Modellen basierende Methode anwenden, müssen über eine IMMZulassung verfügen, aber für sich allein nicht aus."
            />    
        </Container>
        <Container>
            <MainCard title='Image 4' 
                      image={img4} 
                      description="It is pushing the envelope At the end of the customer journey.
"
            />    
        </Container>
        <Container>
            <MainCard title='Image 5' 
                      image={img5} 
                      description="After a while, finding that nothing more happened, she decided on going into the loveliest garden you ever eat a bat?' when suddenly, thump!"

            />    
        </Container>
        <Container>
            <MainCard title='Image 6' 
                      image={img6} 
                      description="Pudiera caseras burlaba no sr echando militar oh. Emma ch otro ocho alla idea la. Musculos comedido estatura pie era delibero acataban. Ex no doloroso zumbaban so comedido. Ve golpe nuevo entre pecho la babbo oh mucho. Id su salvo no ma amigo diego. Era excelente preterita escondido palabrota mil sus.
"
            />    
        </Container>
        <Container>
            <MainCard title='Image 7' 
                      image={img7} 
                      description= "Sit nulla officia ex anim in sit Lorem cillum."
            />    
        </Container>
    </Carousel>
    </Container>
    )
}

export default MainCarousel;

