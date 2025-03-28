import { useState } from 'react';

const Pelicula = ({ pelicula }) => {
  return (
    <tr key={pelicula.id}>
      <td>{pelicula.title}</td>
      <td>{pelicula.description}</td>
    </tr>
  );
}

export default Pelicula;