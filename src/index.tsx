import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { routes } from "./common";
import ApiKeyPage from "./pages/apiKey/apiKeyPage";
import CharactersPage from "./pages/characters/charactersPage";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact={true} path={routes.apiKey} component={ApiKeyPage} />
      <Route exact={true} path={routes.characters} component={CharactersPage} />
      <Route path={"*"}>
        <Redirect to={routes.apiKey} />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
