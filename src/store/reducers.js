import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import todosReducer from './todos/reducers';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['todos'],
};

const rootReducer = combineReducers({
  todosReducer: persistReducer(persistConfig, todosReducer),
});

export default rootReducer;
