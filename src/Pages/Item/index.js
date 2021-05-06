import React from "react";
import { useParams } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import LeftPart from "./Section/LeftPart";

export default function Item() {
  const { id } = useParams();
  return (
    <div>
      <Grid>
        <Grid.Column
          computer={10}
          tablet={9}
          mobile={16}
          style={{ backgroundColor: "black", padding: "0" }}
        >
          <LeftPart />
        </Grid.Column>
        <Grid.Column
          computer={6}
          tablet={7}
          mobile={16}
          style={{
            backgroundColor: "#424242",
            minHeight: "70vh",
            padding: "0",
          }}
        >
          {id}
        </Grid.Column>
      </Grid>
    </div>
  );
}
