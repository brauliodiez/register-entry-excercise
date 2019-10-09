import * as React from "react";
import { Link } from "react-router-dom";
import { routesLinks } from "core";
import { RegisterCollectionContainer } from "pods/register-entry";

export const RegisterEntryScene = () => (
  <>
    <RegisterCollectionContainer />

    <Link to={routesLinks.registerCollection}>
      Navigate to register collection
    </Link>
  </>
);
