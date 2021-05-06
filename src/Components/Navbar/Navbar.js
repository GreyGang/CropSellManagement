import React, { useState } from "react";
import { Media } from "../../theme/theme";
import NavBarMobile from "./Section/Mobile/Mobile";
import NavBarDesktop from "./Section/Desktop/Desktop";

export default function Navbar(props) {
  const [visible, isVisible] = useState(false);
  const { children, leftItems, rightItems } = props;

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
          rightItems={rightItems}
          visible={visible}
          children={children}
        >
          <div style={{ marginTop: "4.2em" }}>{children}</div>
        </NavBarMobile>
      </Media>
      <Media greaterThan="mobile">
        <NavBarDesktop
          leftItems={leftItems}
          rightItems={rightItems}
          children={children}
        />
        <div style={{ marginTop: "4.2em" }}>{children}</div>
      </Media>
    </>
  );
}
