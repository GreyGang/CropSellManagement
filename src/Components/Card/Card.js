import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard({
  img_url,
  about,
  type,
  price,
  quantity,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="image here bro"
          height="100%"
          image={img_url}
          title="crop"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {about}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {type}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ₹ {price} for {quantity} kg
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
