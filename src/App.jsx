import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import Todoform from './components/Todoform'
import Search from './components/Search'
import Filter from './components/Filter'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar tv",
      category: "Completa",
      isCompleted: false
    }
  ])

  const addTodo = (text, category) => {
    const newTodo = [...todos, {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false
    }];
    setTodos(newTodo);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('Asc');

  return (
    <>
      <div className="app">
        <h1>Lista de tarefas</h1>
        <Search search={search} setSearch={setSearch} />
        <Filter filter={filter} setFilter={setFilter} sort = {sort} setSort = {setSort} />
        <div className="todoList">
          {todos
            .filter(todo =>
              filter === "All"
                ? true
                : filter === "Completed"
                ? todo.isCompleted
                : !todo.isCompleted
            )
            .filter(todo =>
              todo.text.toLowerCase().includes(search.toLowerCase())
            )
            .sort((a,b)=>
            sort === "Asc" 
            ? a.text.localeCompare(b.text)
            :b.text.localeCompare(a.text)
          )
            .map(todo => (
              <Todo
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
              />
            ))}
        </div>
        <Todoform addTodo={addTodo} />
      </div>
    </>
  );
}

export default App;
