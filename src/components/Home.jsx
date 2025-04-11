import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pelicula from './components/Pelicula';
import AddPelicula from "./components/AddPelicula";
import { fetchPeliculas, addPelicula } from "./services/apiService"; 

function Home() {


    return (
        <div className="app-container">
          <h1 className="app-title">Mis películas</h1>
    
          <footer className="footer"></footer>
        </div>
      );


}

export default Home;
