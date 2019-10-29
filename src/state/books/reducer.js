import * as actions from "./actions";
import initialState from "./initialState";

export default (state = initialState(), action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.GET_BOOKS:
      return {
        ...state,
        books: {
          ...state.books,
          inProgress: true
        }
      };
    case actions.GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: {
          ...state.books,
          inProgress: false,
          data: payload
        }
      };

    case actions.GET_BOOKS_FAIL:
      return {
        ...state,
        books: {
          ...state.books,
          inProgress: false,
          error: payload
        }
      };
    case actions.SELECT_BOOK:
      return {
        ...state,
        book: {
          ...state.book,
          inProgress: true
        }
      };

    case actions.SELECT_BOOK_SUCCESS:
      return {
        ...state,
        book: {
          ...state.book,
          inProgress: false,
          data: payload
        }
      };
    case actions.SELECT_BOOK_FAIL:
      return {
        ...state,
        book: {
          ...state.book,
          inProgress: false,
          error: payload
        }
      };

    case actions.SUBMIT_BOOK:
      return {
        ...state,
        books: {
          ...state.books,
          inProgress: true
        }
      };

    case actions.SUBMIT_BOOK_SUCCESS:
      return {
        ...state,
        books: {
          ...state.books,
          inProgress: false,
          data: payload
        }
      };

    case actions.SUBMIT_BOOK_FAIL:
      return {
        ...state,
        books: {
          ...state.books,
          inProgress: false,
          error: payload
        }
      };
    case actions.UPDATE_BOOK:
      return {
        ...state,
        books: {
          ...state.books,
          inProgress: true
        }
      };

    case actions.UPDATE_BOOK_SUCCESS:
      return {
        ...state,
        books: {
          ...state.books,
          inProgress: false,
          data: payload
        }
      };

    case actions.UPDATE_BOOK_FAIL:
      return {
        ...state,
        books: {
          ...state.books,
          inProgress: false,
          error: payload
        }
      };
    case actions.FILTER_BOOKS_BY_AUTHOR:
      return {
        ...state,
        books: {
          ...state.books,
          inProgress: true
        }
      };

    case actions.FILTER_BOOKS_BY_AUTHOR_SUCCESS:
      return {
        ...state,
        books: {
          ...state.books,
          inProgress: false,
          filteredBooks: payload
        }
      };

    case actions.FILTER_BOOKS_BY_AUTHOR_FAIL:
      return {
        ...state,
        books: {
          ...state.books,
          inProgress: false,
          error: payload
        }
      };
    default:
      return state;
  }
};
