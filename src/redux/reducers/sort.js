const initialState = {
  sortBy: "all",
  searchQuery: "",
};

export const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SORT":
      return { ...state, sortBy: action.payload };
    case "SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};

export const setSort = (sort) => ({
  type: "SET_SORT",
  payload: sort,
});
export const setQuerySearch = (query) => ({
  type: "SEARCH_QUERY",
  payload: query,
});
