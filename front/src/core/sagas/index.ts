import { watchReadCollectionUsersRequestStart } from "./read-collection.sagas";
import { all, fork } from "redux-saga/effects";

export const rootSaga = function* root() {
    yield all([
      fork(watchReadCollectionUsersRequestStart)]);
  };