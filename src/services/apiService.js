export const fetchPeliculas = async() => {
    try{
        const response= await fetch("http://localhost:3000/peliculas")
        return await response.json();
    }catch(err) {
        console.log("Error al obtener las peliculas", err);
    }
}

export const addPelicula = async(pelicula) => {
    try {
        const response = await fetch("http://localhost:3000/peliculas", {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(pelicula),
        });
        return await response.json();
    }catch(err) {
        console.log("error al añadir la pelicula", err)
    }
}
