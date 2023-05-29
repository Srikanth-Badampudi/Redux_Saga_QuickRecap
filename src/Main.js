import logo from "./logo.svg";
import "./App.css";

//File Imports
import { addToCart, removeFromCart, CartEmpty } from "./redux/actions";
import { productList } from "./redux/productActions";

//Redux Imports
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";

function Main() {
  const dispatch = useDispatch();
  const ProductListData = useSelector((state) => state.productData);
  console.log("Data in Main Component", ProductListData);
  const productInfo = {
    name: "Iphone",
    type: "Smart Mobile",
    price: "$480",
    color: "Dark Blue",
  };

  return (
    <div className="App">
      <Header />
      <h1>Redux Saga.</h1>
      <div className="TopBtnContainer">
        <button onClick={() => dispatch(addToCart(productInfo))}>
          Add to Cart
        </button>
        <button onClick={() => dispatch(removeFromCart(productInfo.name))}>
          Remove from Cart
        </button>
        <button onClick={() => dispatch(CartEmpty())}>Empty Cart</button>
        <button onClick={() => dispatch(productList())}>
          Get Product List
        </button>
      </div>

      <div className="Product-Container">
        {ProductListData &&
          ProductListData.map((Item, Indx) => {
            return (
              <div key={Item.id} className="Product-Card">
                <p>{Item.name}</p>
                <p>{Item.username}</p>
                <p>{Item.email}</p>
                <p>{Item.phone}</p>
                <div className="BtnContainer">
                  <button onClick={() => dispatch(addToCart(Item))}>
                    Add to Cart
                  </button>
                  <button onClick={() => dispatch(removeFromCart(Item.id))}>
                    Remove to Cart
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Main;
