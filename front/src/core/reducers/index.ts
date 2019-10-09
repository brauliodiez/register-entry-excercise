import { combineReducers } from "redux";
import * as CoreModel from "./state.model";
export { CoreModel };

import {
  registerCollectionReducer,
  RegisterCollectionState
} from "./register-collection.reducer";

export interface CoreRootState {
  registerCollectionState: RegisterCollectionState;
}

export const coreRootReducer = combineReducers<CoreRootState>({
  registerCollectionState: registerCollectionReducer
});
