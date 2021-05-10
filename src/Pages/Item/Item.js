import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import { useParams } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import LeftPart from "./Section/LeftPart/LeftPart";
import RightPart from "./Section/RightPart/RightPart";
export default function Item() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  } else {
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
            <RightPart id={id} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
