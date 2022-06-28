import React from "react";

import Item from "./Item";

import './styles.scss';

const List = ({ todos }) => (
  <ul className="list">
    {todos.map(({ id, value }) => (
      <Item
        key={id}
        id={id}
        value={value}
      />
    ))}
  </ul>
)

export default List;
