import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pelicula from './components/Pelicula';
import AddPelicula from "./components/AddPelicula";
import { fetchPeliculas, addPelicula } from "./services/apiService"; 
function App() {


const [peliculas, setPeliculas] = useState([]);


  useEffect(() => {
    const loadPeliculas= async() => {
      const dataPeliculas= await fetchPeliculas();
      setPeliculas(dataPeliculas);
    }
    loadPeliculas();
},[]);





  const addPelicula = (pelicula) => {
    const nuevaLista = [...peliculas, pelicula];
    setPeliculas(nuevaLista);
    localStorage.setItem('peliculas', JSON.stringify(nuevaLista));
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Lista de Películas</h1>
      <table className="peliculas-table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Género</th>
            <th>Reparto</th>
            <th>Año</th>
          </tr>
        </thead>
        <tbody>
          {
          peliculas.map((pelicula) => (
            <Pelicula key={pelicula.id} pelicula={pelicula} genero={pelicula.genero} 
              /> 

          ))}
        </tbody>
      </table>
      <AddPelicula onAddPelicula={addPelicula} />

      <footer className="footer"></footer>
    </div>
  );
}

export default App;
