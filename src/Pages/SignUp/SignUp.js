import React, { useEffect } from "react";
import SignUpForm from "./Section/SignUpForm/SignUpForm";
import { SignUpWrapper } from "./SignUp.style";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function SignUp(props) {
  const history = useHistory();

  useEffect(() => {
    const { isAuthenticated } = props.auth;
    if (isAuthenticated) {
      history.push("/");
    }
  }, [props.auth, history]);

  return (
    <SignUpWrapper>
      <SignUpForm />
    </SignUpWrapper>
  );
}

const statetoprops = (state) => {
  return state;
};

export default connect(statetoprops, null)(SignUp);
