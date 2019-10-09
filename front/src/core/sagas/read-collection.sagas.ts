import { takeEvery, put, call, all } from "redux-saga/effects";
import { actionIds } from "common-app";
import { readCollectionUsersCompletedAction } from "actions";
import { getTodayRegisterCollection } from "api";
import { mappedFromApiToState } from "./mappers.saga";

export function* watchReadCollectionUsersRequestStart() {
    yield takeEvery(
      actionIds.START_READ_COLLECTION_USERS,
      requestReadCollectionUsers
    );
  }
  function* requestReadCollectionUsers() {
    
    const readCollectionUsersFromAPi = yield call(getTodayRegisterCollection)
    const readCollectionMapped = mappedFromApiToState(readCollectionUsersFromAPi)
    yield put(readCollectionUsersCompletedAction(readCollectionMapped));
   
  }