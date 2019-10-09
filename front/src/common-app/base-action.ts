import { Action } from "redux";

export interface BaseAction<T = any> extends Action<T> {
  payload?: T;
}
