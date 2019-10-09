import { combineReducers } from "redux";
import { coreRootReducer, CoreRootState } from "core/reducers";

export interface ApplicationState {
  coreRootState: CoreRootState;
}

export const applicationReducer = combineReducers<ApplicationState>({
  coreRootState: coreRootReducer
});
