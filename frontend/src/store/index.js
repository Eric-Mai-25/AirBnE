import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk"
import session from './session'
import homesReducer from "./home";
import reserveReducer from "./reserve";
import reviewReducer from "./review";
import reviewSessionbReducer from "./reviewSession";
import userReducer from "./user";

const rootReducer = combineReducers({
    session,
    homes : homesReducer,
    reservations: reserveReducer,
    reviews: reviewReducer,
    reviewSession: reviewSessionbReducer,
    user: userReducer
})

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}


const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
  };

export default configureStore