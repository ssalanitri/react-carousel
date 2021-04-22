import MainCarousel from './components/MainCarousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';


import React from 'react'
import { Container, makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';



const useStyles = makeStyles({
  root: {
    alignContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    marginLeft:100,
    marginRight:100,

  },
  container: {
    height:800,
    width:800,
    alignContent: 'center',
  },
});

const App = () => {

  const classes = useStyles();

  return (
    <>
    <Container className={classes.container}>
    <Typography variant='h3' component='div' className={classes.root} >React Carousel</Typography>
      <MainCarousel/>
    </Container>
    </>
  )
}

export default App