import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes } from "./Assets/Routes/Routes";
import Navbar from "./Components/Navbar";
import { GlobalStyles } from "./Assets/styles/GlobalStyles";
import { MediaContextProvider, mediaStyles } from "./theme";
import { leftItems, rightItems } from "./Assets/Data/NavbarData/index";
import FooterPage from "../src/Components/Footer/index";
function App() {
  return (
    <>
      <style>{mediaStyles}</style>
      <MediaContextProvider>
        <div>
          <Router>
            <Navbar leftItems={leftItems} rightItems={rightItems}>
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
            <FooterPage/>
          </Router>

          <GlobalStyles />
        </div>
           
      </MediaContextProvider>
    </>
  );
}

export default App;
