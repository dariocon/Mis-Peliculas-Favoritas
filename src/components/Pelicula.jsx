import { useState } from 'react';
import PropTypes from "prop-types";

const Pelicula =  ({ pelicula, genero, setFavoritas, favoritas }) => {
  
 /* let peliculasFavoritas = [];
  peliculasFavoritas = JSON.parse(localStorage.getItem('favoritas')) || [];
  const [favoritas, setFavoritas] = useState(peliculasFavoritas);*/

function changeToFavorite() {
  let favoritasActualizada;

  if (favoritas.includes(pelicula.id)) {
    // si es favorita y se ha pulsado el botón, se elimina 
    favoritasActualizada = favoritas.filter(peliculaId => peliculaId !== pelicula.id);
  } else {
    // si es favorita y se ha pulsado el botón, se añade. con ... copiamos el array anterior y creamos uno nuevo al que añadimos la pelicula
    favoritasActualizada = [...favoritas, pelicula.id];
  }
/*Necesitamos pasarle una copia actualizada al localstorage porque si hacemos push al array 
original, no cambia la referencia, que es lo que React tiene en cuenta para saber si ha cambiado el array. 
Lo mismo al eliminar*/
  setFavoritas(favoritasActualizada);
  localStorage.setItem('favoritas', JSON.stringify(favoritasActualizada));
}

    const generoColores = {
        "Ciencia Ficción": 'red',
        "Acción": 'green',
        "Drama": 'blue',
        "Comedia": 'grey'
      };
    const colorGenero= generoColores[genero] || 'black';

      let titulo = pelicula.titulo;
      if (titulo.length > 20) {
        titulo = titulo.slice(0, 20) + '...';
      }
  return (
    <tr key={pelicula.id}>
      <td style={{ color: colorGenero }}>{titulo}
        <button onClick={changeToFavorite}>Marcar como favorita</button>
        {favoritas.includes(pelicula.id)? ("❤️"): "🤍"}
      </td>
      <td style={{ color: colorGenero }}>{pelicula.descripcion}</td>
      <td style={{ color: colorGenero }}>{pelicula.genero || "Genero no especificado"} </td>
      <td style={{ color: colorGenero }}> 
        <ul> 
        
        {pelicula.actores.length>0? (
            pelicula.actores.map((actor) => (             
              <li key={actor}>
                  {actor}
              </li>
            ))
        ):
          <p>Reparto no disponible </p>
        } </ul>  </td>

      <td style={{ color: colorGenero }}>{pelicula.año}</td>

    </tr>
  );
}

Pelicula.propTypes = {
  pelicula: PropTypes.shape({
    id: PropTypes.number.isRequired,  
    titulo: PropTypes.string.isRequired, 
    descripcion: PropTypes.string.isRequired, 
    actores: PropTypes.arrayOf(PropTypes.string),  
    año: PropTypes.number.isRequired, 
  }).isRequired
};  

export default Pelicula;