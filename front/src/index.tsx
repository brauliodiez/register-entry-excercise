import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import {
  RegisterCollectionScene,
  RegisterEntryScene,
  RegisterExitScene
} from "./scenes";
import { Provider } from "react-redux";
import { routerSwitchRoutes } from "core";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={routerSwitchRoutes.registerCollection}
          component={RegisterCollectionScene}
        />
        <Route
          path={routerSwitchRoutes.registerEntry}
          component={RegisterEntryScene}
        />
        <Route
          path={routerSwitchRoutes.registerExit}
          component={RegisterExitScene}
        />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
