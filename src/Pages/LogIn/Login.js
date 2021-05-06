import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import { LogInWrapper } from "./Login.style";
import LogInForm from "./section/LogInForm/LogInForm";
export default function LogIn() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
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
