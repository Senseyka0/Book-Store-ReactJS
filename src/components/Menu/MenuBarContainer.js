import { connect } from "react-redux";
import { removeBookFromCart } from "../../redux/reducers/cart";

import MenuBar from "./MenuBar";

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.items,
  count: cart.items.length,
  totalPrice: cart.items.reduce((total, book) => total + book.price, 0),
});
const mapDispatchToProps = (dispatch) => ({
  removeBookFromCart: (bookId) => dispatch(removeBookFromCart(bookId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
