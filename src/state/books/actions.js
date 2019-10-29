import { createAction } from "redux-actions";

export const GET_BOOKS = "GET_BOOKS";
export const getBooks = createAction(GET_BOOKS);

export const GET_BOOKS_SUCCESS = `${GET_BOOKS}_SUCCESS`;
export const getBooksSuccess = createAction(GET_BOOKS_SUCCESS);

export const GET_BOOKS_FAIL = `${GET_BOOKS}_FAIL`;
export const getBooksFail = createAction(GET_BOOKS_FAIL);

export const SELECT_BOOK = "SELECT_BOOK";
export const selectBook = createAction(SELECT_BOOK);

export const SELECT_BOOK_SUCCESS = `${SELECT_BOOK}_SUCCESS`;
export const selectBookSuccess = createAction(SELECT_BOOK_SUCCESS);

export const SELECT_BOOK_FAIL = `${SELECT_BOOK}_FAIL`;
export const selectBookFail = createAction(SELECT_BOOK_FAIL);

export const SUBMIT_BOOK = "SUBMIT_BOOK";
export const submitBook = createAction(SUBMIT_BOOK);

export const SUBMIT_BOOK_SUCCESS = `${SUBMIT_BOOK}_SUCCESS`;
export const submitBookSuccess = createAction(SUBMIT_BOOK_SUCCESS);

export const SUBMIT_BOOK_FAIL = `${SUBMIT_BOOK}_FAIL`;
export const submitBookFail = createAction(SUBMIT_BOOK_FAIL);

export const UPDATE_BOOK = "UPDATE_BOOK";
export const updateBook = createAction(UPDATE_BOOK);

export const UPDATE_BOOK_SUCCESS = `${UPDATE_BOOK}_SUCCESS`;
export const updateBookSuccess = createAction(UPDATE_BOOK_SUCCESS);

export const UPDATE_BOOK_FAIL = `${UPDATE_BOOK}_FAIL`;
export const updateBookFail = createAction(UPDATE_BOOK_FAIL);

export const FILTER_BOOKS_BY_AUTHOR = "FILTER_BOOKS_BY_AUTHOR";
export const filterBooksByAuthor = createAction(FILTER_BOOKS_BY_AUTHOR);

export const FILTER_BOOKS_BY_AUTHOR_SUCCESS = `${FILTER_BOOKS_BY_AUTHOR}_SUCCESS`;
export const filterBooksByAuthorSuccess = createAction(
  FILTER_BOOKS_BY_AUTHOR_SUCCESS
);

export const FILTER_BOOKS_BY_AUTHOR_FAIL = `${FILTER_BOOKS_BY_AUTHOR}_FAIL`;
export const filterBooksByAuthorFail = createAction(
  FILTER_BOOKS_BY_AUTHOR_FAIL
);
