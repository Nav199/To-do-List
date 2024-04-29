import React from 'react';
import PropTypes from 'prop-types'; // Importe PropTypes

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }} key={todo.id}>
      <div className="content">
        <p>{todo.text}</p>
        <p className='category'>({todo.category})</p>
      </div>
      <div>
        <button className='Complete' onClick={() => completeTodo(todo.id)}>Completar</button>
        <button className='Delete' onClick={() => removeTodo(todo.id)}>X</button>
      </div>
    </div>
  );
}

// Adicione validação de propriedades usando PropTypes
Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
  removeTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
};

export default Todo;
