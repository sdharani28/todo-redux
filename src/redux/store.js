import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk'
import todoReducer from './reducers/todoReducer';

const composedEnhancers = compose(applyMiddleware(thunkMiddleware));

const store = configureStore({
    reducer: {
        todo: todoReducer
    },
    composedEnhancers
})

export default store;

