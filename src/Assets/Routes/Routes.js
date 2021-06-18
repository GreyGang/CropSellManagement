import HomePage from "../../Pages/HomePage/HomePage";
import Cart from "../../Pages/Cart/Cart";
import Error from "../../Pages/Error/Error";
import Item from "../../Pages/Item/Item";
import Profile from "../../Pages/Profile/Profile";
import SignUp from "../../Pages/SignUp/SignUp";
import LogIn from "../../Pages/LogIn/Login";
import LogOut from "../../Pages/Logout/Logout";
import AddItem from "../../Pages/AddItem/AddItem";
import Shop from "../../Pages/Shop/Shop";

export const Routes = [
  {
    id: 1,
    component: HomePage,
    path: "/",
    exact: true,
  },
  {
    id: 2,
    component: Cart,
    path: "/cart",
    exact: true,
  },
  {
    id: 3,
    component: Error,
    path: "/error",
    exact: true,
  },
  {
    id: 4,
    component: Item,
    path: "/item/:id",
    exact: true,
  },
  {
    id: 5,
    component: Profile,
    path: "/profile",
    exact: true,
  },
  {
    id: 6,
    component: SignUp,
    path: "/signup",
    exact: true,
  },
  {
    id: 6,
    component: LogIn,
    path: "/login",
    exact: true,
  },
  {
    id: 7,
    component: LogOut,
    path: "/logout",
    exact: true,
  },
  {
    id: 8,
    component: AddItem,
    path: "/addItem",
    exact: true,
  },
  {
    id: 9,
    component: Shop,
    path: "/shop",
    exact: true,
  },
];
