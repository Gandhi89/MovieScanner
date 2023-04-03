import { configureStore } from '@reduxjs/toolkit'
import movieRuducer from './redux/Movie/movieSlice';
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
    reducer: {
        movies: movieRuducer
    },
    middleware: [thunkMiddleware],
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;