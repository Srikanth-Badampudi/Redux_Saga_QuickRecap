//Redux Imports
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";

//Local Imports
import productSaga from "./ProductSaga";

//Creating SagaMiddleware
const sagaMiddleware = createSagaMiddleware();

//Connecting sagaMiddleware to Store using (applyMiddleware).
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

//To Specify Which SagaFile You Have to Run
sagaMiddleware.run(productSaga);

export default store;
