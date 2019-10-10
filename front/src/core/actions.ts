import { actionIds, BaseAction } from "common-app";
import { RegisterEntryEntity } from "core/reducers/state.model";

export const readCollectionUsersStartAction = (): BaseAction => ({
    type: actionIds.START_READ_COLLECTION_USERS,
    payload: null
  });

  export const readCollectionUsersCompletedAction = (userCollection: RegisterEntryEntity[]): BaseAction => ({
    type: actionIds.COMPLETED_READ_COLLECTION_USERS,
    payload: userCollection
  });
  
