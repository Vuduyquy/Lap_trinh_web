import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counterSlice';
import usersReducer from '../slices/userSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: usersReducer,
    },
});

export default store;