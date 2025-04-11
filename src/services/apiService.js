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


export const changeStatus = async(status, setStatus, pelicula) => {
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