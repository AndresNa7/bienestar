<<<<<<< HEAD
// api.js (o un archivo separado para las llamadas API)

async function obtenerFichas() {
    const url = 'https://proyecto-backend-sgbienestar.onrender.com/ficha'; // Reemplaza con la URL correcta
  
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('No se pudo obtener la lista de fichas');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error al obtener fichas: ${error.message}`);
    }
  }
  
  export { obtenerFichas };
  
=======
async function obtenerFichas() {
    const url = 'https://proyecto-backend-sgbienestar.onrender.com/ficha'; // Reemplaza con la URL correcta
  
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('No se pudo obtener la lista de fichas');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error al obtener fichas: ${error.message}`);
    }
  }
  
  export { obtenerFichas };
>>>>>>> b52cbc45c6d4ec27a9dfb43c180574e73ebe4a2c
