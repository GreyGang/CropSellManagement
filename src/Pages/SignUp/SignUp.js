import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import SignUpForm from "./Section/SignUpForm/SignUpForm";
import { SignUpWrapper } from "./SignUp.style";
export default function SignUp() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
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
