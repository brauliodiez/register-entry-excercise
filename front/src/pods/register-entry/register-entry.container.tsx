import * as React from "react";
import { RegisterEntryComponent } from "./register-entry.component";
import { registerEntryMockData } from "./register-entry.mock";

// Temporary React Container
// Move to Redux Container once everything is wired up

export const RegisterCollectionContainer = () => {
  const [registerEntryState, setRegisterEntryState] = React.useState(
    registerEntryMockData
  );

  

  return (
    <RegisterEntryComponent
      registerEntry={registerEntryState}
      onChange={()=>{}}
    />
  );
};
