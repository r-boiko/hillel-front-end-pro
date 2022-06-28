import React, { useState } from 'react';
import {connect} from 'react-redux';

import {selectTodos, selectEnterTodo} from '../../store/todos/selectors'
import {addTodo, setEnterTodo} from '../../store/todos/actions'

import TodosComponent from "./component";

import './styles.scss';

const Todos = ({todos, addTodo, enterTodo, setEnterTodo}) => {
  // const [enterTodo, setEnterTodo] = useState('');
  // const [todos, setTodos] = useState([]);

  const handleEnterTodo = e => {
    setEnterTodo(e.target.value);
  }

  const handleAddTodo = () => {
   const newTodo = {
      id: Math.round(Math.random() * 100),
      value: enterTodo,
      checked: false,
    }

    setEnterTodo('');
    addTodo(newTodo);
    // setTodos([...todos, newTodo]);
  }

  // const handleRemoveTodo = todoId => {
  //   // const updatedTodos = todos.filter(todo => todoId !== todo.id);
  //
  //   removeTodo(todoId);
  //   // setTodos(updatedTodos);
  // }

  const handleCheckTodo = () => {
    // TODO: Write your logic for check todo here
  }

  const isTodosEmpty = todos.length === 0;

  return (
    <TodosComponent
      enterTodo={enterTodo}
      todos={todos}
      isTodosEmpty={isTodosEmpty}
      onEnterTodo={handleEnterTodo}
      onAddTodo={handleAddTodo}
      // onRemoveTodo={handleRemoveTodo}
    />
  )
}

const mapStateToProps = state => ({
  todos: selectTodos(state),
  enterTodo: selectEnterTodo(state),
});

const mapDispatchToProps = {
  addTodo,
  setEnterTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
