import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pelicula from './components/Pelicula';

function App() {
  
  const peliculas = [
    { id: 1, title: 'El Señor de los Anillos', description: 'Una épica aventura en la Tierra Media.' },
    { id: 2, title: 'Matrix', description: 'Un hacker descubre la verdad detrás de su realidad.' },
    { id: 3, title: 'Inception', description: 'Un ladrón roba ideas a través de sueños.' },
  ];

  return (
    <div className="app-container">
      <h1 className="app-title">Lista de Películas</h1>
      <table className="peliculas-table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {peliculas.map((pelicula) => (
            <Pelicula key={pelicula.id} pelicula={pelicula} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
