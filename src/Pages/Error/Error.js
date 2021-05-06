import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import Button from "./../../Components/Button/Button";
import { H1, PageWrapper } from "./Error.style";

export default function Error() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <PageWrapper>
        <H1>404</H1>
        <H1>OOPS! PAGE NOT FOUND</H1>
        <Button>Go To Homepage</Button>
      </PageWrapper>
    );
  }
}
