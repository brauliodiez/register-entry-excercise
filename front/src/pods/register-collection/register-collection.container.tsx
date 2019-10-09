import * as React from "react";
import { RegisterCollectionComponent } from "./register-collection.component";
import { entryCollectionMockData } from './register-collection.mock';

// Temporary React Container
// Move to Redux Container once everything is wired up

export const RegisterCollectionContainer = () => {
  const [entryCollection] = React.useState(entryCollectionMockData)
  return <RegisterCollectionComponent  entryCollection={entryCollection} />;
};
    