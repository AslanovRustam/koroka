import "./App.css";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./components/loginPage/loginPage";
import CatalogPage from "./components/catalogPage/catalogPage";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>

        <Route path="/catalog">
          <CatalogPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
