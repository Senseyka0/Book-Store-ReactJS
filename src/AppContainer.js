import { useEffect } from "react";
import { connect } from "react-redux";
import Axios from "axios";
import orderBy from "lodash/orderBy";

import { setBooks, setIsLoading } from "./redux/reducers/books";
import { setQuerySearch, setSort } from "./redux/reducers/sort";

import App from "./App";

const AppContainer = (props) => {
  useEffect(() => {
    Axios.get("/books.json").then((response) => {
      props.setBooks(response.data);
      props.setIsLoading(true);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <App {...props} />;
};

const sortBy = (books, filterBy) => {
  switch (filterBy) {
    case "all":
      return books;
    case "expensivePrice":
      return orderBy(books, "price", "desc");
    case "cheapPrice":
      return orderBy(books, "price", "asc");
    case "author":
      return orderBy(books, "author", "asc");

    default:
      return books;
  }
};

const filterBooks = (books, searchQuery) => {
  return books.filter(
    (o) =>
      o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
  );
};

const searchBooks = (books, filterBy, searchQuery) => {
  return sortBy(filterBooks(books, searchQuery), filterBy);
};

const mapStateToProps = ({ books, cart, sort }) => ({
  books: books.items && searchBooks(books.items, sort.sortBy, sort.searchQuery),
  isLoading: books.isLoading,

  cartItems: cart.items,

  sortBy: sort.sortBy,
  searchQuery: sort.searchQuery,
});
const mapDispatchToProps = (dispatch) => ({
  setBooks: (books) => dispatch(setBooks(books)),
  setIsLoading: (bool) => dispatch(setIsLoading(bool)),

  setSort: (sort) => dispatch(setSort(sort)),
  setSearchQuery: (query) => dispatch(setQuerySearch(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
