import { Card, Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import MenuBarContainer from "./components/Menu/MenuBarContainer";
import BookCardContainer from "./components/BookCard/BookCardContainer";

import "./App.scss";
import Sort from "./components/Sort/Sort";

const App = (props) => {
  return (
    <Container className="app">
      <MenuBarContainer />
      <Sort
        sortBy={props.sortBy}
        setSort={props.setSort}
        searchQuery={props.searchQuery}
        setSearchQuery={props.setSearchQuery}
      />
      <Card.Group itemsPerRow={4}>
        {props.isLoading ? <BookCardContainer books={props.books} /> : "Загрузка..."}
      </Card.Group>
    </Container>
  );
};

export default App;
