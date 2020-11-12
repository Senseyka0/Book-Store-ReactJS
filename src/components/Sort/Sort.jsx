import React from "react";
import { Input, Menu } from "semantic-ui-react";

import "./Sort.scss";

const Sort = (props) => {
  const handleItemClick = (e, { name }) => {
    props.setSort(name);
  };
  return (
    <Menu secondary>
      <Menu.Item name="all" active={props.sortBy === "all"} onClick={handleItemClick}>
        Все
      </Menu.Item>
      <Menu.Item
        name="expensivePrice"
        active={props.sortBy === "expensivePrice"}
        onClick={handleItemClick}
      >
        Цена (дорогие)
      </Menu.Item>
      <Menu.Item
        name="cheapPrice"
        active={props.sortBy === "cheapPrice"}
        onClick={handleItemClick}
      >
        Цена (дешёвые)
      </Menu.Item>
      <Menu.Item
        name="author"
        active={props.sortBy === "author"}
        onClick={handleItemClick}
      >
        Автор
      </Menu.Item>
      <Menu.Item>
        <Input
          value={props.searchQuery}
          onChange={(e) => props.setSearchQuery(e.target.value)}
          icon="search"
          placeholder="Введите название книги..."
        />
      </Menu.Item>
    </Menu>
  );
};

export default Sort;
