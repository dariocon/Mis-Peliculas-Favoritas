import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pelicula from './components/Pelicula';
import AddPelicula from "./components/AddPelicula";
import { fetchPeliculas, addPelicula } from "./services/apiService"; 
import { BrowserRouter, Routes, Route } from "react-router-dom"
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>   
        <Route path="/" element={<Layout/>}>
          <Route index element={<Navigate to="/home" replace/>}/>
          <Route path="home" element={<Home/>}></Route>
          <Route path="peliculas" element={<ListaPeliculas />}></Route>
          <Route path="addpelicula" element={<AddPelicula />}></Route>
          <Route path="*" element={<h1>Error 404</h1>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router;
