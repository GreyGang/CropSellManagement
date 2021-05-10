import React from "react";
import { data } from "../../../../Assets/Data/ProductData/ProductData";
import { Divider, Grid, Segment, Message } from "semantic-ui-react";
import { starFull, location2 } from "react-icons-kit/icomoon";
import { Icon } from "react-icons-kit";
import Button from "../../../../Components/Button/Button";
export default function RightPart() {
  return (
    <div>
      <h1
        style={{
          color: "black",
          textAlign: "center",
          backgroundColor: "white",
          padding: "1rem 0",
        }}
      >
        {data[0].name}
      </h1>
      <Segment placeholder>
        <Grid columns={2} stackable textAlign="center">
          <Divider vertical>and</Divider>

          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <Icon icon={starFull} size={32} />
              <b style={{ padding: "0 1rem" }}>{data[0].seller.rating}/5</b>
            </Grid.Column>
            <Grid.Column>
              <Icon icon={location2} size={32} />
              <b style={{ padding: "0 1rem" }}>{data[0].seller.address}</b>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Message
        icon="inbox"
        header="Price = ₹55 for 1Kg"
        content="All taxes included."
      />
      <div style={{ textAlign: "center", padding: "3rem 0" }}>
        <Button>Buy Now</Button>
        <Button>Add to Cart</Button>
      </div>
    </div>
  );
}
