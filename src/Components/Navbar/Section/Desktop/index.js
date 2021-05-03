import { Menu, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import icon from "../../../../Assets/Images/png/icon1.png";
const NavBarDesktop = (props) => {
  const { leftItems, rightItems } = props;

  return (
    <>
      <Menu fixed="top" inverted>
        <Menu.Item>
          <Image size="mini" src={icon} />
        </Menu.Item>
        {leftItems.map((item) => (
          <Menu.Item>
            <Link to={item.to}>{item.content}</Link>
          </Menu.Item>
        ))}

        <Menu.Menu position="right">
          {rightItems.map((item) => (
            <Menu.Item>
              <Link to={item.to}>{item.content}</Link>
            </Menu.Item>
          ))}
        </Menu.Menu>
      </Menu>
    </>
  );
};

export default NavBarDesktop;
