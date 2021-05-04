import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes } from "./Assets/Routes/Routes";
import Navbar from "./Components/Navbar";
import { GlobalStyles } from "./Assets/styles/GlobalStyles";
import { MediaContextProvider, mediaStyles } from "./theme";
import { leftItems, rightItems } from "./Assets/Data/NavbarData/index";
import Button from "./Components/Button";
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
          </Router>
          <GlobalStyles />
          <Button>Demo Button</Button>
        </div>
      </MediaContextProvider>
    </>
  );
}

export default App;
