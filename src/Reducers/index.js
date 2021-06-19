import { combineReducers } from "redux";
import auth from "./Auth";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cart/cart.reducers";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  auth: auth,
  cart: cartReducer,
});
export default persistReducer(persistConfig,rootReducer);
