import { useState } from 'react';
import PropTypes from "prop-types";

const Pelicula =  ({ pelicula, genero }) => {
  


  const [status, setStatus] = useState(pelicula.favorito);


  const changeStatus = async() => {
    const newStatus=!status

    try{
        const response = await fetch(`http://localhost:3000/peliculas/${pelicula.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({favorito: newStatus})
        })
        setStatus(newStatus)
    }catch(err) {
        console.log("error al cambiar el estatus", err)
    }
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
        <button onClick={changeStatus}>Marcar como favorita</button>
        {status? ("❤️"): "🤍"}
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