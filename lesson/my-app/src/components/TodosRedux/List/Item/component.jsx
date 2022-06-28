import React from "react";
import {connect} from "react-redux";

import {removeTodo} from '../../../../store/todos/actions';

import './styles.scss';

const Item = ({ id, value, onRemoveTodo }) => (
  <li className="item">
    <div className="value">
      <input
        className="check"
        type="checkbox"
        onClick={() => console.log('Write your logic for check todo here')}
      />
      {value}
    </div>
    <button onClick={() => onRemoveTodo(id)}>
      x
    </button>
  </li>
)

const mapDispatchToProps = {
  onRemoveTodo: removeTodo
}

export default connect(null, mapDispatchToProps)(Item);
