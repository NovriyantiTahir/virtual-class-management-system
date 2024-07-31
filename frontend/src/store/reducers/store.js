import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './userReducer';
import classReducer from './classReducer';
import attendanceReducer from './attendanceReducer';

// Combine all reducers
const rootReducer = combineReducers({
    users: userReducer,
    classes: classReducer,
    attendance: attendanceReducer
});

// Create store with middleware and Redux DevTools extension
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;

