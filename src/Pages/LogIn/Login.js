import React, { useEffect } from "react";
import { LogInWrapper } from "./Login.style";
import LogInForm from "./section/LogInForm/LogInForm";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function LogIn(props) {
  const history = useHistory();

  useEffect(() => {
    const { isAuthenticated } = props.auth;
    console.log(isAuthenticated);
    if (isAuthenticated) {
      history.push("/");
    }
  }, [props.auth, history]);

  return (
    <LogInWrapper>
      <LogInForm />
    </LogInWrapper>
  );
}

const statetoprops = (state) => {
  return state;
};

export default connect(statetoprops, null)(LogIn);
