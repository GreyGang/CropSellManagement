import { Menu, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import icon from "../../../../Assets/Images/png/icon1.png";
import { Icon } from "react-icons-kit";
const NavBarDesktop = (props) => {
  const { leftItems, rightItems } = props;

  return (
    <>
      <Menu fixed="top" inverted>
        <Menu.Item>
          <Image size="mini" src={icon} />
        </Menu.Item>
        {leftItems.map((item) => (
          <Menu.Item key={item.id}>
            <Link to={item.to} exact={item.exact}>
              {item.content}
              <Icon icon={item.icon} style={{ marginLeft: "0.5rem" }}></Icon>
            </Link>
          </Menu.Item>
        ))}

        <Menu.Menu position="right">
          {rightItems.map((item) => (
            <Menu.Item key={item.id}>
              <Link to={item.to} exact={item.exact}>
                {item.content}
                <Icon icon={item.icon} style={{ marginLeft: "0.5rem" }}></Icon>
              </Link>
            </Menu.Item>
          ))}
        </Menu.Menu>
      </Menu>
    </>
  );
};

export default NavBarDesktop;
