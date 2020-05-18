import { createStore,combineReducers, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import InitializeReducers from './reducers';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const AppStore = createStore(
    combineReducers(InitializeReducers),
    composeEnhancer(applyMiddleware(thunk))
    );

export default AppStore;