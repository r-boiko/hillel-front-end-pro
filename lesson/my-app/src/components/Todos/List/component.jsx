import React from "react";

import Item from "./Item";

import './styles.scss';

const List = ({ todos, onRemoveTodo }) => (
  <ul className="list">
    {todos.map(({ id, value }) => (
      <Item
        key={id}
        id={id}
        value={value}
        onRemoveTodo={onRemoveTodo}
      />
    ))}
  </ul>
)

export default List;
