import React from 'react'

export const UsersList = ({ users, selectUser, deleteUser, setPressed }) => {
  return (
    <div className='text-[12px] md:w-full'>
      {users.map((user) => (
        <div className='bg-sky-700 rounded-xl p-4 m-5 text-white'>
          <div key={user.id} className='text-[15px] user flex justify-between'>
            <div>
              <div>
                <h3 className='text-[18px]'>
                  <b>
                    {user.first_name} {user.last_name}
                  </b>
                </h3>
              </div>
              <div>
                <h2>{user.email}</h2>
              </div>
              <div>
                <h2>
                  <i className='fa-solid fa-cake-candles mr-3'></i>
                  {user.birthday}
                </h2>
              </div>
              {/* <div>
                            <h2><b>Password: </b>{user.password}</h2>
                        </div> */}
            </div>
            <div className='flex gap-2'>
              <button onClick={() => deleteUser(user.id)}>
                <i className='fa-solid fa-trash text-red-600'></i>
              </button>
              <button
                onClick={() => {
                  selectUser(user)
                  setPressed(true)
                }}
              >
                <i className='fa-solid fa-pencil text-black'></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
// lg:text-[80px]
