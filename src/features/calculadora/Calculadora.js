import React, { useState } from 'react';
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


const Calculadora = () => {
    const [resultado, setResultado] = useState(0);
    const { numero1, numero2, operacao } = useSelector((state) => state.calculo);
  
    const onNumero1Change = (event) => {
      setNumero1(event.target.value);
    };
  
    const onNumero2Change = (event) => {
      setNumero2(event.target.value);
    };
  
    const onOperacaoChange = (event) => {
      setOperacao(event.target.value);
    };
  
    const onCalcular = () => {
      calcularResultado()
    };
  
    return (
      <div>
        <div>
          <input type="number" placeholder="Número 1" value={numero1} onChange={onNumero1Change} />
          <input type="number" placeholder="Número 2" value={numero2} onChange={onNumero2Change} />
          <select value={operacao} onChange={onOperacaoChange}>
            <option value="soma">+</option>
            <option value="subtracao">-</option>
            <option value="multiplicacao">*</option>
            <option value="divisao">/</option>
          </select>
        </div>
        <div>
          <button onClick={onCalcular}>Calcular</button>
          <output>{resultado}</output>
        </div>
      </div>
    );
  };