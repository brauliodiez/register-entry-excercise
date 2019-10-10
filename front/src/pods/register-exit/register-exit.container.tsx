import * as React from "react";
import { RegisterExitComponent } from "./register-exit.component";
import { registerExitMockData } from "./register-exit.mock";

// Temporary React Container
// Move to Redux Container once everything is wired up

export const RegisterExitContainer = () => {
  const [registerExitState, setRegisterExitState] = React.useState(
    registerExitMockData
  );

  

  return (
    <RegisterExitComponent
      registerExit={registerExitState}
      onChange={()=>{}}
    />
  );
};
