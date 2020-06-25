import React from "react";
import { ReactComponent as ShoppingIcon } from "./../../assets/shopbag(1).svg";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";
import { toggleCartHidden } from "./../../redux/cart/cart-action";

import "./cart-icon.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className=" shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
