import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
export default function Profile() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div>
        <h1>Welcome to Profile</h1>
      </div>
    );
  }
}
