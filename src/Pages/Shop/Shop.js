import React, { useEffect, useState } from "react";
import client from "../../Utils/Connection";
import Loader from "../../Components/Loader/Loader";
import Card from "../../Components/Card/Card";
function Shop() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fetching = async () => {
        const json = await client.get("/items/getitem");
        setData(json.data);
        setLoading(false);
      };
      fetching();
    } catch (err) {}
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {data.map((item) => (
          <Card {...item} />
        ))}
      </div>
    );
  }
}

export default Shop;
