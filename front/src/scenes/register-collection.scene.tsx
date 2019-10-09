import * as React from "react";
import { Link } from "react-router-dom";
import { routesLinks } from "core";
import { RegisterCollectionContainer } from "pods/register-collection";
import { AppLayout } from "layout";

export const RegisterCollectionScene = () => (
  <>
   <AppLayout></AppLayout>
    <RegisterCollectionContainer/>
    <Link to={routesLinks.registerEntry}>Navigate to register entry</Link>
    <Link to={routesLinks.registerExit}>Navigate to register exit</Link>
  </>
);
