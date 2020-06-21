import React from "react";
import { ReactComponent as ShoppingIcon } from "./../../assets/shopbag(1).svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "./../../redux/cart/cart-action";

import "./cart-icon.scss";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className=" shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
