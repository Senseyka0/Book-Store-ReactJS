import React from "react";
import { Menu } from "semantic-ui-react";

import PopupBlock from "./PopupBlock/PopupBlock";

import "./MenuBar.scss";

const MenuBar = (props) => {
  return (
    <Menu>
      <Menu.Item name="browse">Магазин книг</Menu.Item>

      <Menu.Menu position="right">
        <PopupBlock
          count={props.count}
          cartItems={props.cartItems}
          removeBookFromCart={props.removeBookFromCart}
        />
        <Menu.Item name="signup">
          Итого: &nbsp;<b>{props.totalPrice} </b> &nbsp; грн.
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default MenuBar;
