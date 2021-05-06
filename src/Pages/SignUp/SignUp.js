import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import SignUpForm from "./Section/SignUpForm/SignUpForm";
import { SignUpWrapper } from "./SignUp.style";
import client from "./../../Utils/Connection";

export default function SignUp() {
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
      <SignUpWrapper>
        <SignUpForm />
      </SignUpWrapper>
    );
  }
}
