import React from 'react'
import { FaPlus, FaPlusCircle } from 'react-icons/fa'

const TodoInput = ({text, handleText , handleSubmit}) => {
  return (
    

 <form onSubmit={handleSubmit}>
    <div className='input-group mb-3'>
      <input 
       type="text"
       name='text'
       value={text}
       onChange={handleText}
       className='form-control border-0 shadow-none rounded-left-10'
       placeholder='Add New Task'  />

      <button className='input-group-text btn btn-light 
      shadow-none border-0'><FaPlusCircle className='fs-3  text-primary'/></button>

    </div>
 </form> 
  )
}

export default TodoInput
