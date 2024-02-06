import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { Global } from "../../helpers/Global";

export const Register = () => {
  const { form, changed } = useForm({});
  const [ saved, setSaved ] = useState("not_sended");

  const saveUser = async (e) => {
    e.preventDefault();

    let newUser = form;

    // console.log(newUser)
    const request = await fetch(Global.url + "user/register", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await request.json();

    // console.log(data)
    if (data.status == "success") {
      setSaved("saved");
    } else {
      setSaved("error");
    }
  };

  return (
    <>
      <header className="content__header content__header--public">
        <h1 className="content__title">Registro</h1>
      </header>

      <div className="content__posts">

        <strong className="alert alert-success">{saved == "saved" ? "Usuario registrado correctamente" : ''}</strong>
        <strong className="alert alert-danger">{saved == "error" ? "El usuario no se ha registrado" : ''}</strong>

        <form className="register-form" onSubmit={saveUser}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" onChange={changed} />
          </div>

          <div className="form-group">
            <label htmlFor="surname">Apellidos</label>
            <input type="text" name="surname" onChange={changed} />
          </div>

          <div className="form-group">
            <label htmlFor="nick">Nick</label>
            <input type="text" name="nick" onChange={changed} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" name="email" onChange={changed} />
          </div>

          <div className="form-group">
            <label htmlFor="password">Nombre</label>
            <input type="password" name="password" onChange={changed} />
          </div>

          <input type="submit" value="Registro" className="btn btn-success" />
        </form>
      </div>
    </>
  );
};
