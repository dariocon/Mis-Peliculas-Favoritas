import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pelicula from './components/Pelicula';

function App() {
  
  const peliculas = [
    { id: 1, title: 'El Señor de los Anillos', description: 'Una épica aventura en la Tierra Media.', genero:'Aventura' },
    { id: 2, title: 'Matrix', description: 'Un hacker descubre la verdad detrás de su realidad.', genero:'Acción' },
    { id: 3, title: 'Inception', description: 'Un ladrón roba ideas a través de sueños.', genero: 'Drama'},
    { id: 4, title: 'Perfect Days', description: 'Hirayama parece totalmente satisfecho con su sencilla vida de limpiador de retretes en Tokio. Una serie de encuentros inesperados revelan poco a poco más de su pasado. '},

  ];

  return (
    <div className="app-container">
      <h1 className="app-title">Lista de Películas</h1>
      <table className="peliculas-table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Género</th>

          </tr>
        </thead>
        <tbody>
          {peliculas.map((pelicula) => (
            <Pelicula key={pelicula.id} pelicula={pelicula} genero={pelicula.genero} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
