import Cookies from "universal-cookie";
const cookies = new Cookies();

const initialState = {
  token: cookies.get("token"),
  isAuthenticated: false,
  user: null,
};

const Auth = (state = initialState, action) => {
  if (action.type === "LOGIN") {
    const { token, user } = action.payload.data;
    return { ...state, token: token, user: user, isAuthenticated: true };
  }
  if (action.type === "LOGOUT") {
    return { ...state, token: "", user: "", isAuthenticated: false };
  }
  return state;
};

export default Auth;
