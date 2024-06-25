import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Todo = () => {
  const [text, setText] = useState('');
  const [todo, setTodo] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [todoUpdate, setTodoUpdate] = useState(null); // State to track the todo item being updated

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === '') {
      setError('Please enter a valid todo text.');
    } else {
      const newTodo = {
        _id: Date.now(), // Generate unique ID based on timestamp
        text: text,
        completed: false
      };

      setTodo([newTodo, ...todo]); // Add newTodo to the beginning of todo array
      setText(''); // Clear the input field
      setError(''); // Clear any previous error messages
      setSuccess('Added Successfully'); // Display success message
      setTimeout(() => {
        setSuccess('');
      }, 3000); // Clear success message after 3 seconds
    }
  };

  const handleDelete = (id) => {
    const updatedTodo = todo.filter(t => t._id !== id); // Filter out the todo with the given id
    setTodo(updatedTodo); // Update todo state with the filtered array
    setSuccess('Successfully Deleted'); // Display success message for deletion
    setTimeout(() => {
      setSuccess('');
    }, 3000); // Clear success message after 3 seconds
  };

  const handleComplete = (txt) => {
    const updatedTodo = todo.map(t =>
      t._id === txt._id ? { ...t, completed: true } : t
    ); // Map over todos and mark the todo with the given _id as completed
    setTodo(updatedTodo); // Update todo state with the updated array
    setSuccess('Successfully Completed'); // Display success message for completion
    setTimeout(() => {
      setSuccess('');
    }, 3000); // Clear success message after 3 seconds
  };

  const handleUpdate = () => {
    if (!todoUpdate) {
      setError('No todo item selected for update.');
      return;
    }

    if (text.trim() === '') {
      setError('Please enter a valid todo text.');
      return;
    }

    const updatedTodo = todo.map(t =>
      t._id === todoUpdate._id ? { ...t, text: text } : t
    );

    setTodo(updatedTodo);
    setTodoUpdate(null); // Clear the todoUpdate state
    setText(''); // Clear the input field
    setSuccess('Successfully Updated'); // Display success message for update
    setTimeout(() => {
      setSuccess('');
    }, 3000); // Clear success message after 3 seconds
  };

  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100 text-light'>
      <div className='row'>
        <div className='bg-dark text-light shadow-lg p-5'>
          <div className='col-lg-8 w-100 col-md-8 col-sm-10 col-12'>
            <div className='mb-3'>
              <h1>Todo List Manager App</h1>
              <hr />
              <div className='text-danger text-center fw-lighter'>{error}</div>
              <div className='text-success text-center fw-lighter'>{success}</div>
            </div>

            <TodoInput text={text} handleText={handleText} handleSubmit={handleSubmit} />

            <TodoList 
              todo={todo}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
              handleUpdate={handleUpdate} // Pass handleUpdate function to TodoList
              setTodoUpdate={setTodoUpdate} // Pass setTodoUpdate function to TodoList
              setError={setError} // Pass setError function to TodoList
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
