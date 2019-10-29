import { all, takeEvery, takeLatest, put } from "redux-saga/effects";
import {
  getBooksAPI,
  selectBookAPI,
  submitBookAPI,
  updateBookAPI
} from "../../services/api";
import * as actions from "./actions";

export function* getBooks$() {
  try {
    const response = yield getBooksAPI();
    yield put(actions.getBooksSuccess(response.data));
  } catch (error) {
    yield put(actions.getBooksFail(error));
  }
}

export function* selectBook$({ payload }) {
  try {
    const { bookId } = payload;
    const response = yield selectBookAPI(bookId);
    yield put(actions.selectBookSuccess(response.data));
  } catch (error) {
    yield put(actions.selectBookFail(error));
  }
}

export function* submitBook$({ payload }) {
  try {
    const response = yield submitBookAPI(payload);
    yield put(actions.submitBookSuccess(response.data));
    yield put(actions.getBooks());
  } catch (error) {
    yield put(actions.submitBookFail(error));
  }
}

export function* updateBook$({ payload }) {
  try {
    const response = yield updateBookAPI(payload);
    yield put(actions.updateBookSuccess(response.data));
  } catch (error) {
    yield put(actions.updateBookFail(error));
  }
}

export function* filterBooksByAuthor$({ payload }) {
  try {
    const searchAuthor = payload.toLowerCase().trim();
    const { data } = yield getBooksAPI();
    const filteredPost = data.filter(book =>
      book.author.toLowerCase().includes(searchAuthor)
    );
    yield put(actions.filterBooksByAuthorSuccess(filteredPost));
  } catch (error) {
    yield put(actions.filterBooksByAuthorFail(error));
  }
}

export default function*() {
  yield all([
    takeEvery(actions.getBooks, getBooks$),
    takeLatest(actions.selectBook, selectBook$),
    takeLatest(actions.submitBook, submitBook$),
    takeLatest(actions.updateBook, updateBook$),
    takeLatest(actions.filterBooksByAuthor, filterBooksByAuthor$)
  ]);
}
