import React from "react";

//Redux Imports
import { useSelector } from "react-redux";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  console.warn("Redux data in header", result);
  return (
    <div className="header">
      <div className="cart-div">
        <span>{result.length}</span>
        <img src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=170667a&w=0&k=20&c=jFgoM27NKwD5xbu6U9gkOwlIKc1L82PlFDYlcIJwi8E=" />
      </div>
    </div>
  );
};

export default Header;
