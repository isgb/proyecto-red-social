import React, { useEffect, useState } from 'react'
import { Global } from '../../helpers/Global'
import { UserList } from '../user//UserList'
import { useParams } from 'react-router-dom'

export const Following = () => {

  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const [more, setMore] = useState(true)
  const [following, setFollowing] = useState()
  const [loading, setLoading] = useState(true)

  const params = useParams();

  const userId = params.userId;

  useEffect(() => {
    getUsers(1);
  }, [])

  const getUsers = async (nextPage = 1) => {

    //Efecto de carga
    setLoading(true)

    // Sacar userId de la url

    //Peticion para sacar usuarios
    const request = await fetch(Global.url + 'follow/following/' + userId + "/" + nextPage, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token")
      }
    })

    const data = await request.json();

    console.log("VISTA",data)

    let cleanUsers = [];
    // Recorrer y limpiar follows para quedarme con followed
    data.following_users.forEach((follow) => {
      cleanUsers = [...cleanUsers, follow.followed]
    });
    data.users = cleanUsers;
    console.log("ARRAR",data.users);

    // Crear un estado para poder listarlos
    if (data.following_users && data.status == "success") {

      let newUsers = data.following_users;

      if (users.length >= 1) {
        newUsers = [...users, ...data.following_users];
      }

      setUsers(newUsers);
      setFollowing(data.user_following);
      setLoading(false);

      // Paginación
      if (users.length >= (data.total - data.following_users.length)) {
        setMore(false)
      }

    }

  }

  return (
    <>

      <header className="content__header">
        <h1 className="content__title">Usuarios que sigue NOMBRE USUARIO</h1>
      </header>

      <UserList users={users}
        getUsers={getUsers}
        following={following}
        setFollowing={setFollowing}
        page={page}
        setPage={setPage}
        more={more}
        loading={loading}
      />


      <br />

    </>
  )
}
