import React, { useState, useEffect } from "react";
import { Media } from "../../theme/theme";
import NavBarMobile from "./Section/Mobile/Mobile";
import NavBarDesktop from "./Section/Desktop/Desktop";
import { connect } from "react-redux";
import Cookies from "universal-cookie";
import client from "../../Utils/Connection";
const cookies = new Cookies();
function Navbar(props) {
  const [visible, isVisible] = useState(false);
  const { children, leftItems, rightItems, rightItemsLogin, login } = props;
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const token = cookies.get("token");
    console.log(token);
    client.get("/auth/user").then((res) => {
      login(res.data);
    });
  }, [login]);

  useEffect(() => {
    const { isAuthenticated } = props.auth;
    setLogged(isAuthenticated);
  }, [props.auth]);

  const handleToggle = () => {
    isVisible(!visible);
  };

  const handlePusher = () => {
    if (visible) {
      isVisible(false);
    }
  };

  return (
    <>
      <Media at="mobile">
        <NavBarMobile
          leftItems={leftItems}
          onPusherClick={handlePusher}
          onToggle={handleToggle}
          rightItems={logged ? rightItemsLogin : rightItems}
          visible={visible}
          children={children}
        >
          <div style={{ marginTop: "4.2em" }}>{children}</div>
        </NavBarMobile>
      </Media>
      <Media greaterThan="mobile">
        <NavBarDesktop
          leftItems={leftItems}
          rightItems={logged ? rightItemsLogin : rightItems}
          children={children}
        />
        <div style={{ marginTop: "4.2em" }}>{children}</div>
      </Media>
    </>
  );
}

const statetoprops = (state) => {
  return state;
};

const propstostate = (dispatch) => {
  return {
    login: (data) => {
      dispatch({
        type: "LOGIN",
        payload: {
          data,
        },
      });
    },
  };
};

export default connect(statetoprops, propstostate)(Navbar);
