import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { StyledButton } from "../Button/Button.style";
import { connect } from "react-redux";
import { addItem } from "../../Reducers/cart/cart.actions";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ImgMediaCard = ({ item, addItem }) => {
  const classes = useStyles();
  const { img_url, about, type, price, quantity } = item;
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
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "2%",
          }}
        >
          <Typography variant="body2" color="textSecondary" component="p">
            {about}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {type}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ₹ {price} for {quantity} kg
          </Typography>
          <StyledButton onClick={()=> addItem(item)}>Add to Cart</StyledButton>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(ImgMediaCard);
