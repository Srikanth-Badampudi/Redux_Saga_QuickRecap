//Redux Imports
import { takeEvery, put, call } from "redux-saga/effects";

//Local Imports
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

function* getProducts() {
  let data = yield fetch("https://jsonplaceholder.typicode.com/users");
  data = yield data.json();
  yield put({ type: SET_PRODUCT_LIST, data });
  console.warn("getProducts API Called.", data);
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}

export default productSaga;
