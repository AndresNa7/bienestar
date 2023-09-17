import React from "react";
import Autocomplete from "../components/Autocomplete";
import Button from "../components/Button";
import Desplegable from "../components/Desplegable";
import Fecha from "../components/Fecha";
import Input from "../components/Input";
import Politicas from "../components/Politicas";
import Password from "../components/Password";
import miImagen from "./img/Logo.png";
import "./Registro.css";
import "./Desplegable.css";

const Registro = () => {
  return (
    <div>
      <img src={miImagen} alt="Logo de bienestar" />
      <h1>
        REGISTRO
        <h6>
          <br></br>No tienes una cuenta? Registrate aquí
        </h6>
      </h1>
      <Input label="Nombres" />
      <Input label="Apellidos" />
      <Desplegable
        label="Tipo de Documento"
        options={[
          { value: "Targeta de identidad", label: "Targeta de identidad" },
          { value: "cedula", label: "Cédula" },
          { value: "otro", label: "Otro" },
        ]}
      />
      <Fecha label="Fecha de Nacimiento" />
      <Input label="Correo Personal" />
      <Input label="Teléfono" />
      <Input label="Correo Institucional" />
      <Password labelText="Contraseña" />
      <Password labelText="Confirmación Contreseña" />
      <Desplegable
      label="Genero"
        options={[
          { value: "masculino", label: "Masculino" },
          { value: "femenino", label: "Femenino" },
          { value: "otro", label: "Otro" },
        ]}
      />
      <Desplegable
        label="EPS"
        options={[
          { value: "Cosalud", label: "Cosalud" },
          { value: "Salud total", label: "Salud total" },
          { value: "otro", label: "Otro" },
        ]}
      />
      <Desplegable
      label="Rol"
        options={[
          { value: "aprendiz", label: "Aprendiz" },
          { value: "instructor", label: "Instructor" },
          { value: "administrador", label: "Administrador" },
        ]}
      />
      <Autocomplete
        nombre="Ficha"
        array={[
          { label: 2712267, programa: "Programación de software" },
          { label: 2812267, programa: "Programación de software" },
          { label: 2912267, programa: "Programación de software" },
        ]}
      />
      <Desplegable
      label="Tipo de Sangre"
        options={[
          { value: "a+", label: "A+ " },
          { value: "o+", label: "O+" },
          { value: "b+", label: "B+" },
        ]}
      />
      <Input label="Dirección" />
      <Button label="Registrarse" />
      <Politicas label="Politicas" />
    </div>
  );
};

export default Registro;
