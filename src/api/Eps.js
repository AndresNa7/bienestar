<<<<<<< HEAD
// api.js (o un archivo separado para las llamadas API)
export async function obtenerEPS() {
    const url = 'https://proyecto-backend-sgbienestar.onrender.com/eps'; // Reemplaza con la URL correcta
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('No se pudo obtener la lista de EPS');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error al obtener EPS: ${error.message}`);
    }
  }
  

=======
// api.js (o un archivo separado para las llamadas API)
export async function obtenerEPS() {
    const url = 'https://proyecto-backend-sgbienestar.onrender.com/eps'; // Reemplaza con la URL correcta
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('No se pudo obtener la lista de EPS');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error al obtener EPS: ${error.message}`);
    }
  }
>>>>>>> b52cbc45c6d4ec27a9dfb43c180574e73ebe4a2c
