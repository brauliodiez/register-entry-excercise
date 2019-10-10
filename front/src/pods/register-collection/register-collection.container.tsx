import { RegisterCollectionComponent } from "./register-collection.component";
import { connect } from "react-redux";
import { mapFromRegisterCoreToRegisterViewCollection } from "./register-collection.mapper";
import { readCollectionUsersStartAction } from "core/actions";
import { ApplicationState } from "store/reducers";

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

    