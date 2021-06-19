import { Menu, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import icon from "../../../../Assets/Images/png/icon1.png";
import { Icon } from "react-icons-kit";
import CartIcon from '../../../cart-icon/cart-icon.component.jsx';
import CartDropdown from "../../../cart-dropdown/cart-dropdown.component";
import { connect } from "react-redux";

const NavBarDesktop = (props) => {
  const { leftItems, rightItems ,hidden} = props;

  return (
    <>
      <Menu fixed="top" inverted>
        <Menu.Item>
          <Link to="/">
            <Image size="mini" src={icon} />
          </Link>
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
          <CartIcon />
          {
            hidden ? null:
          <CartDropdown />
          }
        </Menu.Menu>
      </Menu>
    </>
  );
};
const mapStateToProps =({cart: {hidden}})=>({
  hidden
})
export default connect(mapStateToProps)(NavBarDesktop);
