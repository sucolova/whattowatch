import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/form/formSlize.js';
import movieReducer from '../features/Movies/movieSlice.js';

export const store = configureStore({
    reducer: {
        form: formReducer,
        movie: movieReducer
    },
});
