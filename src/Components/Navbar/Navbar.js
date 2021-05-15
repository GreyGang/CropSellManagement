import React, { useState, useEffect } from "react";
import { Media } from "../../theme/theme";
import NavBarMobile from "./Section/Mobile/Mobile";
import NavBarDesktop from "./Section/Desktop/Desktop";
import { connect } from "react-redux";
function Navbar(props) {
  const [visible, isVisible] = useState(false);
  const { children, leftItems, rightItems, rightItemsLogin } = props;
  const [logged, setLogged] = useState(false);

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

export default connect(statetoprops, null)(Navbar);
