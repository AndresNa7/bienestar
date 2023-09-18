

export function Inicio(){
    return(
        <div>
        <h1>Home</h1>
        <Link to="/registro"> {/* Utiliza Link para redirigir a la página Registro */}
          <button>Regístrate</button>
        </Link>
        <button>Inicia Sesión</button>
      </div>
    )
}