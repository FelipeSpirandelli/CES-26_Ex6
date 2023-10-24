import { createSlice } from '@reduxjs/toolkit';
import calcular from './calcular';

const initialState = {
    numero1: undefined,
    numero2: undefined,
    operation: undefined,
};

export const calculadoraSlice = createSlice({
    name: 'calculadora',
    initialState,
    reducers: {
        setNumero1: (state, action) => {
            console.log(action.payload)
            state.numero1 = action.payload;
        },
        setNumero2: (state, action) => {
            state.numero2 = action.payload;
        },
        setOperacao: (state, action) => {
            state.operation = action.payload;
        },
        calcularResultado: (state) => {
            state.numero1 = calcular(state.numero1, state.numero2, state.operation);
        },
    },
});

export const { setNumero1, setNumero2, setOperacao, calcularResultado } = calculadoraSlice.actions;

export const selectNumero1 = (state) => state.calculadora.numero1;
export const selectNumero2 = (state) => state.calculadora.numero2;
export const selectOperation = (state) => state.calculadora.operation;


export default calculadoraSlice.reducer;
