import * as React from "react";
import { Link } from "react-router-dom";
import { routesLinks } from "core";
import {RegisterExitContainer} from "../pods/register-exit/register-exit.container";

export const RegisterExitScene = () => (
  <>
    <h2>Hello from register exit scene Page</h2>
      <RegisterExitContainer/>
    <Link to={routesLinks.registerCollection}>
      Navigate to register collection
    </Link>
  </>
);
