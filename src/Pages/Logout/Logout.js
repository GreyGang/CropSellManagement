import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function Logout(props) {
  const history = useHistory();
  useEffect(() => {
    cookies.set("token", "", { path: "/" });
    history.push("/");
    props.logout();
  }, [history, props]);
  return <div></div>;
}

const propstostate = (dispatch) => {
  return {
    logout: () => {
      dispatch({
        type: "LOGOUT",
      });
    },
  };
};

export default connect(null, propstostate)(Logout);
