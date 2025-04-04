import { useState } from 'react';

const Pelicula = ({ pelicula, genero, fav }) => {

  //const [status, setStatus] = useState(fav);

  function changeToFavorite  (id) {

    let favoritasActualizada;

    favoritasActualizada = favoritas.filter(peliculaId => peliculaId !== id);

    setFavoritas(favoritasActualizada);

    localStorage.setItem('favoritas', JSON.stringify(favoritasActualizada));
  };

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
        {fav? ("❤️"): "🤍"}
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

export default Pelicula;