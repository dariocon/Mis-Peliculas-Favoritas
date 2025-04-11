import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pelicula from './components/Pelicula';
import AddPelicula from "./components/AddPelicula";
import { fetchPeliculas, addPelicula } from "./services/apiService"; 
function App() {
  /*
const peliculasIniciales  = [
  {
      id: 1,
      titulo: "Inception",
      descripcion: "Un ladrón que roba secretos a través de los sueños.",
      genero: "Ciencia Ficción",
      actores: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
      año: 2010
    },
    {
      id: 2,
      titulo: "The Dark Knight",
      descripcion: "Batman se enfrenta a su peor enemigo, el Joker.",
      genero: "Acción",
      actores: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      año: 2008
    },
    {
      id: 3,
      titulo: "Forrest Gump",
      descripcion: "La vida de un hombre con un gran corazón a lo largo de la historia de EE.UU.",
      genero: "Drama",
      actores: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
      año: 1994
    },
    {
      id: 4,
      titulo: "The Grand Budapest Hotel",
      descripcion: "Un conserje y su aprendiz se ven envueltos en un misterio.",
      genero: "Comedia",
      actores: ["Ralph Fiennes", "Tony Revolori", "Adrien Brody"],
      año: 2014
    },
    {
      id: 5,
      titulo: "Interstellar",
      descripcion: "Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar.",
      genero: "Ciencia Ficción",
      actores: [],
      año: 2014
    },
    { 
      id: 6, 
      titulo: 'Perfect Days', 
      descripcion: 'Hirayama parece totalmente satisfecho con su sencilla vida de limpiador de retretes en Tokio. Una serie de encuentros inesperados revelan poco a poco más de su pasado.', 
      actores: [], 
      año: 2023 
    }
  ];*/


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
              /> // no puedo poner dentro const fav = favoritas.includes(pelicula.id); del map 

          ))}
        </tbody>
      </table>
      <AddPelicula onAddPelicula={addPelicula} />

      <footer className="footer"></footer>
    </div>
  );
}

export default App;
