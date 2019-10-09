import * as React from "react";
import { Link } from "react-router-dom";
import { routesLinks } from "core";
import SignatureCanvas from "react-signature-canvas";

export const RegisterEntryScene = () => (
  <>
    <h2>Hello from register entry scene Page</h2>

    <SignatureCanvas
      penColor="black"
      backgroundColor="rgba(240,240,240,255)"
      canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
    />

    <Link to={routesLinks.registerCollection}>
      Navigate to register collection
    </Link>
  </>
);
