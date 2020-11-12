import React, { useState } from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import "./BookCard.scss";

const BookCard = ({ book, addBookToCart }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const addBook = () => {
    addBookToCart(book);
    setIsAddedToCart(true);
  };
  return (
    <Card>
      <Image src={book.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{book.title}</Card.Header>
        <Card.Meta>
          <span className="author">{book.author}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Icon name="currency" />
        &nbsp;{book.price} грн.
      </Card.Content>

      {isAddedToCart ? (
        <Button icon={"hand peace outline"} name="Добавлено в корзину!" />
      ) : (
        <Button onClick={addBook} icon={"shopping cart"}></Button>
      )}
    </Card>
  );
};

export default BookCard;
