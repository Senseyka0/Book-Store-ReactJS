import { connect } from "react-redux";
import { addBookToCart } from "../../redux/reducers/cart";
import BookCard from "./BookCard";

const BookCardContainer = (props) => {
  return (
    <>
      {props.books.map((book) => (
        <BookCard key={book.id} book={book} addBookToCart={props.addBookToCart} />
      ))}
    </>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  addBookToCart: (book) => dispatch(addBookToCart(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookCardContainer);
