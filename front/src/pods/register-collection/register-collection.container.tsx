import * as React from "react";
import { RegisterCollectionComponent } from "./register-collection.component";
import { entryCollectionMockData } from './register-collection.mock';
import * as CoreModel from "core/reducers/state.model";
import { connect } from "react-redux";
import { mapFromRegisterCoreToRegisterViewCollection } from "./register-collection.mapper";
import { readCollectionUsersStartAction } from "core/actions";
import { ApplicationState } from "store/reducers";

//export type RegisterCollectionState = CoreModel.RegisterEntryEntity[];

const mapStatetoProps = (state: ApplicationState) => ({
  entryCollection: mapFromRegisterCoreToRegisterViewCollection(state.coreRootState.registerCollectionState)
});

const mapDispatchToProps = dispatch => ({
  onLoadCollection: () => dispatch(readCollectionUsersStartAction()),
});

export const RegisterCollectionContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(RegisterCollectionComponent);



// Temporary React Container
// Move to Redux Container once everything is wired up
/*
export const RegisterCollectionContainer = () => {
  const [entryCollection] = React.useState(entryCollectionMockData)
  return <RegisterCollectionComponent  entryCollection={entryCollection} />;
};*/
    