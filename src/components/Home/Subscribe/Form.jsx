import React from "react";
import { useForm } from "react-hook-form";

import "../../../assets/styles/components/Subscribe.scss";
import Arrow from "../../../assets/static/images/img/arrow-right.svg";

const Form = () => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = () => {
    props.loginUser(form);
  };

  return (
    <>
      <form className="subscribe_form" onSubmit={handleSubmit(onSubmit)}>
        <input
          name="email"
          placeholder="ingresa tu mail"
          type="text"
          ref={register({
            required: {
              value: true,
              message: "Este campo es requerido",
            },
            pattern: {
              value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
              message: "Debe ser un email",
            },
            maxLength: {
              value: 50,
              message: "No puede tener mas de 50 caracteres",
            },
            minLength: {
              value: 5,
              message: "No puede tener menos de 5 caracteres",
            },
          })}
        />
        <img src={Arrow} alt="Flecha a la derecha" />
      </form>
      <div className="subscribe">
        <p>{errors.email && errors.email.message}</p>
      </div>
    </>
  );
};

export default Form;
