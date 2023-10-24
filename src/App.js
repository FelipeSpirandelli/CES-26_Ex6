import React from 'react';
import Calculadora from './features/calculadora/Calculadora';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
        <Navbar />
        <Calculadora />
        <Footer />
    </div>
  );
}

export default App;
