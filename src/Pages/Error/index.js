import React from "react";
import Button from "./../../Components/Button";
import { H1, PageWrapper } from "./index.style";

export default function Error() {
  return (
    <PageWrapper>
      <H1>404</H1>
      <H1>OOPS! PAGE NOT FOUND</H1>
      <Button>Go To Homepage</Button>
    </PageWrapper>
  );
}
