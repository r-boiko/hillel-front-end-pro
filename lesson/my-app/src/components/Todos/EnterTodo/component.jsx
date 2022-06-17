import React from "react";

import './styles.scss';

const EnterTodo = ({ value, onChange, onClick }) => (
  <div className="enter-wrap">
    <input
      type="text"
      placeholder="Write your todo here"
      value={value}
      onChange={onChange}
      className="enter"
    />
    <button
      className="add"
      onClick={onClick}
    >
      Add Todo
    </button>
  </div>
)

export default EnterTodo;
