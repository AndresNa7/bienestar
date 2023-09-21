<<<<<<< HEAD
// registro.js

// Función para hacer la solicitud POST
export const registrarUsuario = async (datosUsuario) => {
  try {
    const response = await fetch('URL_DEL_SERVIDOR', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datosUsuario), // datosUsuario contiene los datos del formulario
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

  
=======
// registro.js

// Función para hacer la solicitud POST
export const registrarUsuario = async (datosUsuario) => {
    try {
      const response = await fetch('https://proyecto-backend-sgbienestar.onrender.com/registro', {
        method: 'POST', mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosUsuario), // datosUsuario contiene los datos del formulario
      });
  
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };
>>>>>>> b52cbc45c6d4ec27a9dfb43c180574e73ebe4a2c
