import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    maxHeight:300,
  },
  media: {
    width: 200,
    height: 200,
  },
});

const  MediaCard = ({title, description, image}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
             component="img"
             alt={title}
             image={image}
             title={title} 
             className={classes.media}

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <ChevronLeft />
        </Button>
        <Button size="small" color="primary">
          <ChevronRight />
        </Button>
      </CardActions>
    </Card>
  );
}


export default MediaCard;