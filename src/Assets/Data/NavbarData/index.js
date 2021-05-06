import {
  home3,
  cart,
  blocked,
  rocket,
  userPlus,
} from "react-icons-kit/icomoon";

const leftItems = [
  { content: "Home", to: "", id: 1, icon: home3 },
  { content: "Cart", to: "cart", id: 2, icon: cart },
  { content: "Error", to: "error", id: 3, icon: blocked },
];
const rightItems = [
  { content: "Login", to: "login", id: 1, icon: rocket },
  { content: "SignUp", to: "signup", id: 2, icon: userPlus },
];

export { leftItems, rightItems };
