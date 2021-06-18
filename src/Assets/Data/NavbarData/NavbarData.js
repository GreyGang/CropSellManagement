import {
  home3,
  cart,
  blocked,
  rocket,
  userPlus,
  cool2,
  joomla,
  yelp,
} from "react-icons-kit/icomoon";

const leftItems = [
  { content: "Home", to: "", id: 1, icon: home3 },
  { content: "Error", to: "error", id: 3, icon: blocked },
];
const rightItems = [
  { content: "Login", to: "login", id: 1, icon: rocket },
  { content: "SignUp", to: "signup", id: 2, icon: userPlus },
];

const rightItemsLogin = [
  { content: "Logout", to: "logout", id: 1, icon: rocket },
];

const leftItemsLogin = [
  { content: "Profile", to: "profile", id: 1, icon: yelp },
  { content: "Add Item", to: "addItem", id: 2, icon: cool2 },
  { content: "Cart", to: "cart", id: 3, icon: cart },
  { content: "ShopNow", to: "shop", id: 4, icon: joomla },
];

export { leftItems, rightItems, rightItemsLogin, leftItemsLogin };
