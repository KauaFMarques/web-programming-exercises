import React, { useState, useEffect } from 'react';
import './App.css';

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [ativo, setAtivo] = useState(true);

  useEffect(() => {
    let intervalo = null;
    if (ativo) {
      intervalo = setInterval(() => {
        setContador((contador) => contador + 1);
      }, 1000);
    }
    return () => clearInterval(intervalo);
  }, [ativo]);

  const pararContador = () => {
    setAtivo(false);
  };

  const reiniciarContador=()=>{
    setContador(0);
    setAtivo(true);
  }

  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Contador: {contador}</h1>
        <button 
          onClick={pararContador}
          className="custom-button mb-4"
          disabled={!ativo}
        >
          Parar Contador
        </button>
        <button 
          onClick={reiniciarContador}
          className="botao botao-reiniciar"
        >
          Reiniciar Contador
        </button>
      </div>
    </div>
  );
};

export default Contador;
