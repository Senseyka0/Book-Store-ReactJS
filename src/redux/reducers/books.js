const initialState = {
  isLoading: false,
  items: null,
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BOOKS":
      return { ...state, items: action.payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};

export const setBooks = (books) => ({
  type: "SET_BOOKS",
  payload: books,
});
export const setIsLoading = (bool) => ({
  type: "SET_IS_LOADING",
  payload: bool,
});
