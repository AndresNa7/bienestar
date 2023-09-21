import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import miimagen from '../pages/imagenes/sena-bienestar.png';
import './Autenticacion.css';
import { getParametre } from '../UseFetch';
import { useNavigate } from 'react-router-dom'


export default function Autenticacion() {
  const navegacion = useNavigate()
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [activacionCompletada, setActivacionCompletada] = useState(false);

  // Función para verificar el estado del usuario
  const verificarEstadoUsuario = () => {
    getParametre('/registro/usuario/', userId)
      .then((userData) => {
        setUser(userData);
        // Aquí debes verificar el valor de tipo_activacion y establecer activacionCompletada en consecuencia
        if (userData && userData.activacion === true) {
          setActivacionCompletada(true);
        }
      })
      .catch((error) => {
        console.error('Error al obtener la información del usuario:', error);
      });
  };

  useEffect(() => {
    verificarEstadoUsuario(); // Verificar el estado del usuario al cargar la página

    // Configurar un temporizador para verificar periódicamente
    const intervalId = setInterval(() => {
      verificarEstadoUsuario();
    }, 5000); // Verifica cada 5 segundos (ajusta el intervalo según tus necesidades)

    // Limpia el temporizador cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, [userId, navegacion]);

  return (
    <div>
      <h1>Autenticación</h1>
      <Link to="/Registro">Registro</Link>
      <br />
      <Link to="/login">Login</Link>

      <figure>
        <img src={miimagen} alt="sena-imagen" />
      </figure>
      <div className='father'>
        <div>
          <h1>Revise su correo electrónico y confirme su dirección de correo electrónico</h1>
          {user ? (
            <>
              <p>Estimado usuario {user.nombres}</p>
              {activacionCompletada ? (
                <>
                  <h3>Su correo electrónico ha sido verificado con éxito.</h3>
                  {/* Aquí puedes agregar un botón o un mensaje de redirección */}
                </>
              ) : (
                <>
                  <h3>Enviamos un correo electrónico de confirmación a su correo electrónico:</h3>
                  <p>{user.correo_inst}</p>
                  <h3>¿No puede encontrar el correo electrónico?</h3>
                  <p>Puede que algunos correos tarden en recibirse. Compruebe su carpeta de correos no deseados.</p>
                  <a href='#'><button>Reenviar correo electrónico</button></a>
                </>
              )}
            </>
          ) : (
            <p>Cargando la información del usuario...</p>
          )}
        </div>
      </div>
    </div>
  );
}
