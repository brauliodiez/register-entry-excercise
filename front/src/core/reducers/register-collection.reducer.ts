import { BaseAction } from "common-app";
import * as CoreModel from "./state.model";

export type RegisterCollectionState = CoreModel.RegisterEntryEntity[];

export const registerCollectionReducer = (
  state: RegisterCollectionState = [],
  action: BaseAction
): RegisterCollectionState => {
  switch (action.type) {
  }
  return state;
};
