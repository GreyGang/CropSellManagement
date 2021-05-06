import HomePage from "../../Pages/HomePage";
import Cart from "../../Pages/Cart";
import Error from "../../Pages/Error";
import Item from "../../Pages/Item";
import Profile from "../../Pages/Profile";
import SignUp from "../../Pages/SignUp";
import LogIn from "../../Pages/LogIn";
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
];
