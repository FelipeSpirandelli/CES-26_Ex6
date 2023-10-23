import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import calculadoraReducer from '../features/calculadora/calculadoraSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    calculadora: calculadoraReducer
  },
});
