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
  
  export const insertNewUserAction = (newUser: RegisterEntryEntity): BaseAction => ({
    type: actionIds.INSERT_NEW_USER,
    payload: newUser
  });