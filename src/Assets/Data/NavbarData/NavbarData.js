import {
  home3,
  cart,
  blocked,
  rocket,
  userPlus,
  cool2,
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
  { content: "Add Item", to: "addItem", id: 1, icon: cool2 },
  { content: "Cart", to: "cart", id: 2, icon: cart },
];

export { leftItems, rightItems, rightItemsLogin, leftItemsLogin };
