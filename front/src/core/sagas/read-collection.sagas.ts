import { takeEvery, put, call, all } from "redux-saga/effects";
import { actionIds } from "common-app";
import { readCollectionUsersCompletedAction } from "actions";

export function* watchReadCollectionUsersRequestStart() {
    yield takeEvery(
      actionIds.START_READ_COLLECTION_USERS,
      requestReadCollectionUsers
    );
  }
  function* requestReadCollectionUsers() {
    
    const readCollectionUsersFromAPi = yield call()
    yield put(readCollectionUsersCompletedAction(readCollectionUsersFromAPi));
   
  }