import { all } from "redux-saga/effects";
import MovieSaga from "./MovieSaga";

export default function* rootSaga() {
  yield all([MovieSaga()]);
}
