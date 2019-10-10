import { all, fork } from "redux-saga/effects";
import {rootSaga as rootCoreSaga} from 'core/sagas'

export const rootSaga = function* root() {
  yield all([fork(rootCoreSaga)]);
};
