import { createStore, combineReducers } from "redux"; ///get the createStore function from redux
import AppReducer from './reducers/app-reducer';

const store = createStore(
      combineReducers({
        AppReducer: AppReducer
      })
);

export default store;
