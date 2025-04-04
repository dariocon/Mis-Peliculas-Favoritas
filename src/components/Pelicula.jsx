import { useState } from 'react';

const Pelicula = ({ pelicula, genero }) => {
    const generoColores = {
        Acción: 'red',
        Drama: 'green',
        Aventura: 'blue',
      };
    const colorGenero= generoColores[genero] || 'black';
    console.log(pelicula.description.slice(0,20))

      let titulo = pelicula.title;
      if (titulo.length > 20) {
        titulo = titulo.slice(0, 20) + '...';
      }
  return (
    <tr key={pelicula.id}>
      <td style={{ color: colorGenero }}>{titulo}</td>
      <td style={{ color: colorGenero }}>{pelicula.description}</td>
      <td style={{ color: colorGenero }}>{pelicula.genero || "Genero no especificado"} </td>

    </tr>
  );
}

export default Pelicula;