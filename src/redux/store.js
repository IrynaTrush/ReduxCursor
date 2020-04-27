import { createStore,combineReducers } from 'redux';
import homeReducer from './reducers/home.reducer';

const reducers = combineReducers({
    homeReducer,
});

const store = createStore(reducers);

export default store;

