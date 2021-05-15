import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes } from "./Assets/Routes/Routes";
import Navbar from "./Components/Navbar/Navbar";
import { GlobalStyles } from "./Assets/styles/GlobalStyles";
import { MediaContextProvider, mediaStyles } from "./theme/theme";
import {
  leftItems,
  rightItems,
  rightItemsLogin,
} from "./Assets/Data/NavbarData/NavbarData";
import FooterPage from "../src/Components/Footer/Footer";
function App() {
  return (
    <>
      <style>{mediaStyles}</style>
      <MediaContextProvider>
        <div>
          <Router>
            <Navbar
              leftItems={leftItems}
              rightItems={rightItems}
              rightItemsLogin={rightItemsLogin}
            >
              <Switch>
                {Routes.map((item) => (
                  <Route
                    key={item.id}
                    exact={item.exact}
                    path={item.path}
                    component={item.component}
                  ></Route>
                ))}
              </Switch>
            </Navbar>
            <FooterPage />
          </Router>

          <GlobalStyles />
        </div>
      </MediaContextProvider>
    </>
  );
}

export default App;
