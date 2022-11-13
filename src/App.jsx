import axios from 'axios'
import { useEffect, useState } from 'react'

import './App.css'
import ButtonAdd from './components/ButtonAdd'
import UsersForm from './components/UsersForm'
import { UsersList } from './components/UsersList'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios
      .get('https://users-crud1.herokuapp.com/users/')
      .then((res) => setUsers(res.data))
  }, [])

  // los valores de la pagina sin valor
  const [select, SetSelect] = useState(null)

  const selectUser = (user) => {
    SetSelect(user)
  }

  const getUsers = () => {
    axios
      .get('https://users-crud1.herokuapp.com/users/')
      .then((res) => setUsers(res.data))
  }

  const desSelectUser = () => {
    SetSelect(null)
  }

  const deleteUser = (item) => {
    // id o item : parametro
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${item}`)
      .then(() => getUsers())
  }

  console.log(users)

  const [pressed, setPressed] = useState(false)

  return (
    <div className='App flex flex-col bg-sky-900 h-full relative'>
      {pressed && (
        <UsersForm
          getUsers={getUsers}
          select={select}
          desSelectUser={desSelectUser}
          setPressed={setPressed}
        />
      )}
      <UsersList
        users={users}
        selectUser={selectUser}
        deleteUser={deleteUser}
        setPressed={setPressed}
      />
      <ButtonAdd setPressed={setPressed} />
    </div>
  )
}

export default App
