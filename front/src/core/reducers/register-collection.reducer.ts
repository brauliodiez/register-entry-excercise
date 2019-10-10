import { BaseAction, actionIds } from "common-app";
import * as CoreModel from "./state.model";

export type RegisterCollectionState = CoreModel.RegisterEntryEntity[];

export const registerCollectionReducer = (
  state: RegisterCollectionState = [],
  action: BaseAction
): RegisterCollectionState => {
  switch (action.type) {
    case actionIds.COMPLETED_READ_COLLECTION_USERS:
      return handleReadUsersCollectionCompleted(state, action.payload);
  }
  return state;
};

const handleReadUsersCollectionCompleted = (
  state: RegisterCollectionState,
  readCollectionUSers
) => readCollectionUSers;
