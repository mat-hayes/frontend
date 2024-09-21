import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [frame, setFrame] = useState('initial');

  useEffect(() => {
    const timer = setTimeout(() => {
      setFrame('main');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const goToFormFrame = () => {
    setFrame('form');
  };

  return (
    <div className={`App ${frame === 'initial' ? 'frame4' : 'frame0'}`}>
      {frame === 'main' && (
        <div className="buttons-container">
          <button className="custom-button" onClick={goToFormFrame}>Crear partida</button>
          <button className="custom-button">Unirse a partida</button>
        </div>
      )}
      {frame === 'form' && (
        <div className="form-container">
          <div className="title">
            <h2>Insertar Información de Partida</h2>
          </div>
          <form className="custom-form">
            <div className="form-group">
              <label htmlFor="gameName">Nombre de la partida</label>
              <div className="input-container">
                <input type="text" name="gameName" id="gameName" placeholder="Escribe el nombre de la partida" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="maxPlayers">Máximo de jugadores</label>
              <div className="input-container">
                <input type="number" name="maxPlayers" id="maxPlayers" placeholder="Número máximo de jugadores" />
              </div>
            </div>
            <button type="submit" className="custom-button1">Crear</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
