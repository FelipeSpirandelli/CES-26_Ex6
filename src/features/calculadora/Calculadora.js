import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    setNumero1,
    setNumero2,
    setOperacao,
    calcularResultado,
    selectNumero1,
    selectNumero2,
    selectOperation
} from './calculadoraSlice';
import './Calculadora.css';

const Calculadora = () => {
    const dispatch = useDispatch();
    const numero1 = useSelector(selectNumero1);
    const numero2 = useSelector(selectNumero2);
    const operation = useSelector(selectOperation);

    const onNumero1Change = (event) => {
        const input = event.target.value;
        if (!/^[0-9]*$/.test(input)) {
            event.preventDefault();
        } else {
            dispatch(setNumero1(input));
        }
    };

    const onNumero2Change = (event) => {
        const input = event.target.value;
        if (!/^[0-9]*$/.test(input)) {
            event.preventDefault();
        } else {
            dispatch(setNumero2(input));
        }
    };

    const onOperacaoChange = (event) => {
        dispatch(setOperacao(event.target.value));
    };

    const onCalcular = () => {
        dispatch(calcularResultado());
    };

    return (
        <div className="calculator-container">
            <div className="input-container">
                <input
                    id="numero1"
                    className="input-field"
                    placeholder="Número 1"
                    value={numero1}
                    onChange={onNumero1Change}
                />
                <input
                    id="numero2"
                    className="input-field"
                    placeholder="Número 2"
                    value={numero2}
                    onChange={onNumero2Change}
                />
                <select className="select-field" value={operation} onChange={onOperacaoChange}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
            </div>
            <div className="calculate-button-container">
                <button className="calculate-button" onClick={onCalcular}>
                    Calcular
                </button>
            </div>
        </div>
    );
};

export default Calculadora;
