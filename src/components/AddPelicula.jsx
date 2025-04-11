import { useState } from "react";
import { addPelicula } from "../services/apiService"; 

const AddPelicula = ({ onAddPelicula }) => {
  const [nuevaPelicula, setNuevaPelicula] = useState({
    titulo: "",
    descripcion: "",
    genero: "",
    actores: "",
    año: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNuevaPelicula({ ...nuevaPelicula, [name]: value });
  };



  async function handleSubmit(event) {
    event.preventDefault();
    
    try {
      const peliculaConFormato = {
        ...nuevaPelicula,
        actores: nuevaPelicula.actores.split(",").map((actor) => actor.trim()),
      }
      const peliculaAñadida = await addPelicula(peliculaConFormato);
      onAddPelicula(peliculaAñadida); 
      setNuevaPelicula({ titulo: "", descripcion: "", genero: "", actores: "", año: "" });
    } catch (err) {
      console.log("Error al añadir la película", err);
    }
  }
  

  return (
    <form className="add-pelicula-form" onSubmit={handleSubmit}>
      <h2>Añadir Nueva Película</h2>
      
      <div className="form-group">
        <label>Título:</label>
        <input
          type="text"
          name="titulo"
          value={nuevaPelicula.titulo}
          onChange={handleChange}
          required
          placeholder="Título de la película"
        />
      </div>
      
      <div className="form-group">
        <label>Descripción:</label>
        <textarea
          name="descripcion"
          value={nuevaPelicula.descripcion}
          onChange={handleChange}
          placeholder="Descripción breve de la película"
        />
      </div>
      
      <div className="form-group">
        <label>Género:</label>
        <select
          name="genero"
          value={nuevaPelicula.genero}
          onChange={handleChange}
        >
          <option value="">Seleccionar</option>
          <option value="Ciencia Ficción">Ciencia Ficción</option>
          <option value="Acción">Acción</option>
          <option value="Drama">Drama</option>
          <option value="Comedia">Comedia</option>
        </select>
      </div>
      
      <div className="form-group">
        <label>Actores (separados por comas):</label>
        <input
          type="text"
          name="actores"
          value={nuevaPelicula.actores}
          onChange={handleChange}
          placeholder="Ej: Leonardo DiCaprio, Joseph Gordon-Levitt"
        />
      </div>
      
      <div className="form-group">
        <label>Año:</label>
        <input
          type="number"
          name="año"
          value={nuevaPelicula.año}
          onChange={handleChange}
          required
          placeholder="Año de lanzamiento"
        />
      </div>
      
      <button type="submit" className="submit-btn">Añadir Película</button>
    </form>
  );
};


export default AddPelicula;
