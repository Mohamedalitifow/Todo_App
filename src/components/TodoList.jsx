import React from 'react';
import { FaCheckSquare, FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const TodoList = ({ todo, handleDelete, handleComplete , handleUpdate, setTodoUpdate}) => {
  return (
    <div className='col-lg-8 w-100 list-zoom col-md-8 col-sm-10 col-12'>
      {todo.map((txt) => (
        <div className='d-flex justify-content-between p-3 my-2 shadow-lg' key={txt._id}>
          <span className={`${txt.completed && 'text-decoration-line-through text-secondary'}`}>
            {txt.text}
          </span>
          <div className='btn-group'>
            {!txt.completed && (
              <>
                <FaCheckSquare
                onClick={() => handleComplete(txt)}
                className='text-success fs-4 btn-action'
              />
             
              </>
              )}
            
            <MdDelete
              onClick={() => handleDelete(txt._id)} // Passes txt._id to handleDelete function
              className='text-danger fs-4 btn-action'
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
