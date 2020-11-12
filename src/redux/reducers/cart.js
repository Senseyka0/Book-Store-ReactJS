const initialState = {
  items: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK_TO_CART":
      return { ...state, items: [...state.items, action.payload] };
    case "REMOVE_BOOK_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export const addBookToCart = (book) => ({
  type: "ADD_BOOK_TO_CART",
  payload: book,
});

export const removeBookFromCart = (bookId) => ({
  type: "REMOVE_BOOK_FROM_CART",
  payload: bookId,
});
