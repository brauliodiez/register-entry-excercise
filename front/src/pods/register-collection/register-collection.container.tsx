import * as React from "react";
import { RegisterCollectionComponent } from "./register-collection.component";
import { entryCollectionMockData } from './register-collection.mock';
import * as CoreModel from "core/reducers/state.model";
import { connect } from "react-redux";

export type RegisterCollectionState = CoreModel.RegisterEntryEntity[];

const mapStatetoProps = (state: RegisterCollectionState) => ({
  entryCollection: state
})

const mapDispatchToProps = dispatch => ({
connectCurrencyUpdateSockets: () => dispatch(startSocketSubscriptionAction()),
disconnectCurrencyUpdateSockets: () =>
  dispatch(stopSocketSubscriptionAction()),

});

export const CurrencyTableContainer = connect(
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
    