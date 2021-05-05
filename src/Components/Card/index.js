import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img1 from "../../Assets/Images/jpg/crop.jpg";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="crop"
          height="140"
          image={img1}
          title="crop"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Crop
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Category
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Price
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
