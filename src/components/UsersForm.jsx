import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const UsersForm = ({ getUsers, select, desSelectUser, setPressed }) => {
  const submit = (data) => {
    console.log(data)
    if (select) {
      axios
        .put(`https://users-crud1.herokuapp.com/users/${select.id}/`, data) //actualizacion del form
        .then(() => {
          getUsers()
          desSelectUser()
        })
        .catch((error) => console.log(error.response?.data))
    } else {
      axios
        .post('https://users-crud1.herokuapp.com/users/', data) // cuerpo el data
        .then(() => getUsers())
        .catch((error) => console.log(error.response?.data))
    }
  }

  const { handleSubmit, register, reset } = useForm()

  useEffect(() => {
    if (select) {
      reset(select)
    }
  }, [select])

  return (
    <div>
      <div
        onClick={() => setPressed(false)}
        className='fixed top-0 left-0 right-0 bottom-0 bg-gray-900/50 md:bg-transparent'
      ></div>
      <form
        className='p-8 rounded-xl fixed top-0 left-1/2 -translate-x-1/2 hover:bg-cyan-800/90 mt-[50%] bg-gray-800/90 md:absolute md:mt-[300px] md:w-[40%] md:p-[50px]'
        onSubmit={handleSubmit(submit)}
      >
        <h2 className='text-[30px] text-gray-50'>
          <b>New User</b>
        </h2>
        <div className='flex mb-1 items-center w-full'>
          <i className='fa-solid fa-user text-gray-50'></i>
          {/* <label htmlFor="first_name"></label>  */}
          <div className='flex flex-col w-full gap-1 ml-[10px] md:flex-row '>
            <input
              className='rounded-xl pl-2 md:w-1/2'
              {...register('first_name')}
              placeholder='first name'
              type='text'
              id='first_name'
            />
            <input
              className='rounded-xl pl-2 md:w-1/2'
              {...register('last_name')}
              placeholder='last name'
              type='text'
              id='last_name'
            />
          </div>

          {/* <label htmlFor="last_name"></label> */}
        </div>
        <div className='flex mb-1'>
          {/* <label htmlFor="email">Email: </label> */}
          <i className='fa-solid fa-envelope text-gray-50'></i>
          <input
            className='rounded-xl pl-2 ml-2 w-full'
            {...register('email')}
            placeholder='email'
            type='email'
            id='email'
          />
        </div>
        <div className='flex mb-1'>
          {/* <label htmlFor="password">Password: </label> */}
          <i className='fa-solid fa-lock text-gray-50'></i>
          <input
            className='rounded-xl pl-2  ml-2 w-full'
            {...register('password')}
            placeholder='password'
            type='password'
            id='password'
          />
        </div>
        <div className='flex mb-1'>
          {/* <label htmlFor="birthday">Birthday: </label> */}
          <i className='fa-solid fa-cake-candles text-gray-50'></i>
          <input
            className='rounded-xl pl-2 ml-2 pr-6'
            {...register('birthday')}
            type='date'
            id='birthday'
          />
        </div>
        <div className='flex justify-center w-full'>
          <button className='rounded-xl  my-[20px] w-full bg-[#37acdae6] text-white'>
            upload
          </button>
        </div>
      </form>
    </div>
  )
}

export default UsersForm

// className='absolute rounded-xl p-[18px] text-[17px]  md:w-1/3 md:h-1/8 hover:bg-cyan-800 right-0 -translate-x-1/2 translate-y-1/2 top-1/2 left-1/2 w-[80%] wx-auto md:right-0 md:translate-x-1/2 md:top-1/2 md:pr-10'
