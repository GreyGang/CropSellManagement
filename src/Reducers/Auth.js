import Cookies from "universal-cookie";
const cookies = new Cookies();

const initialState = {
  token: cookies.get("token"),
  isAuthenticated: null,
  user: null,
};
