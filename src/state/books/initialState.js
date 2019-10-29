const initialState = () => ({
  books: {
    data: [],
    filteredBooks: [],
    inProgress: false,
    error: ""
  },
  book: {
    data: [],
    inProgress: false,
    error: ""
  }
});

export default initialState;
