import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import { LogInWrapper } from "./Login.style";
import LogInForm from "./section/LogInForm/LogInForm";
import client from "./../../Utils/Connection";
export default function LogIn() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .get("/")
      .then((val) => {
        console.log(val);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <LogInWrapper>
        <LogInForm />
      </LogInWrapper>
    );
  }
}
