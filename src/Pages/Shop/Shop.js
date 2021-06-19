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
          margin: "3%",
        }}
      >
        {data.map((item) => (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "2%",
              }}
            >
              <Card key={item.id} item={item} />
            </div>
          </>
        ))}
      </div>
    );
  }
}

export default Shop;
