import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth';

export const Config = () => {

    const {auth} = useAuth();

    const [saved,setSaved] = useState("not_Saved");

    const updateUser = (e) => {
        e.preventDefault();
        
        console.log(auth)
    }

    return (
        <>
            <header className="content__header content__header--public">
                <h1 className="content__title">Ajustes</h1>
            </header>

            <div className="content__posts">


                {saved == "saved"
                    ? <strong className="alert alert-success">Usuario registrado correctamente</strong>
                    : ''
                }

                {saved == "error"
                    ? <strong className="alert alert-danger">El usuario no se ha registrado</strong>
                    : ''
                }

                <form className="config-form" onSubmit={updateUser}>
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" name="name"  />
                    </div>

                    <div className="form-group">
                        <label htmlFor="surname">Apellidos</label>
                        <input type="text" name="surname"  />
                    </div>

                    <div className="form-group">
                        <label htmlFor="nick">Nick</label>
                        <input type="text" name="nick"  />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input type="email" name="email"  />
                    </div>

                    <div className="form-group">
                        <label htmlFor="file0">Avatar</label>
                        <div className='avatar'>

                        </div>
                        <input type="file" name='file0' id='file'/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Nombre</label>
                        <input type="password" name="password"  />
                    </div>

                    <input type="submit" value="Registro" className="btn btn-success" />
                </form>
            </div>
        </>
    )
}
