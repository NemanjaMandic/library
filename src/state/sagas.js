import { all } from "redux-saga/effects";
import booksSaga from "./books/sagas";

export default function*() {
  yield all([booksSaga()]);
}
