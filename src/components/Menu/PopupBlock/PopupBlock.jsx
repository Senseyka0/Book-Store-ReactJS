import React from "react";

import { Button, Image, List, Menu, Popup } from "semantic-ui-react";

import "./PopupBlock.scss";

const PopupBlock = (props) => {
  return (
    <Popup
      trigger={
        <Menu.Item>
          Корзина (<b>{props.count}</b>)
        </Menu.Item>
      }
      content={
        <List selection divided verticalAlign="middle">
          {props.cartItems.length === 0 && <span>Корзина пуста!</span>}

          {props.cartItems.map((item) => (
            <List.Item key={item.id}>
              <List.Content floated="right">
                <Button color="red" onClick={() => props.removeBookFromCart(item.id)}>
                  Remove
                </Button>
              </List.Content>
              <Image size="tiny" src={item.image} />
              <List.Content>{item.title}</List.Content>
            </List.Item>
          ))}
        </List>
      }
      on="click"
      hideOnScroll
    />
  );
};

export default PopupBlock;
