import React from 'react'

const ButtonAdd = ({ setPressed }) => {
  return (
    <div
      onClick={() => setPressed(true)}
      className='w-10 h-10 text-white rounded bg-slate-500 grid place-content-center cursor-pointer fixed bottom-10 left-10'
    >
      <i class='fa-solid fa-user-plus'></i>
    </div>
  )
}

export default ButtonAdd
