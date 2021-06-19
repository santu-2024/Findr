import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
// import data from "../components/data";
import { productListReducer } from "../reducers/index";
// import { composeWithDevTools } from "redux-devtools-extension";


const initialState = {};
const reducer = combineReducers({
    productList : productListReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,
     initialState,
    // composeWithDevTools 
    (applyMiddleware(thunk)));
export default store;