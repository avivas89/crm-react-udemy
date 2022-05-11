import React from 'react'

const Message = ({children}) => {
  return (
    <div className='text-xs text-red-400 font-bold'>
       {children}
    </div>
  )
}

export default Message