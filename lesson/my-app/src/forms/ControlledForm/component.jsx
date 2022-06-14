import {useState} from "react";

import './styles.scss'

const ControlledForm = () => {
  const [fields, setFields] = useState({
    input: '',
    textarea: '',
    select: '1',
    checkbox: false,
    radio: false,
  });

  const isEmpty = object => {
    const keys = Object.keys(object);

    const filteredKeys = keys.filter(key => Boolean(fields[key]))
    console.log(filteredKeys, 'keys')

    return filteredKeys.length < 5;
  };

  const handleSubmit = event => {
    event.preventDefault();

    if(isEmpty(fields)) return;

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: fields.input,
        body: fields.textarea,
        userId: fields.select,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  const handleChangeFields = ({target}) => {
    const value = (target.type === 'checkbox' || target.type === 'radio') ? target.checked : target.value;
    const name = target.name;

    if(target.name === 'input') {
      validateInput(target);
    }

    setFields({
      ...fields,
      [name]: value,
    })
  }

  const validateInput = input => {
    console.log('Validate input: ', input);
  }

  return (
    <div>
      <h1>Controlled Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="input" value={fields.input} onChange={handleChangeFields}/>
        <textarea name="textarea" cols="30" rows="10" value={fields.textarea} onChange={handleChangeFields}/>
        <select name="select" value={fields.select} onChange={handleChangeFields}>
          <option value="1">lorem 1</option>
          <option value="2">lorem 2</option>
        </select>
        <input type="checkbox" name="checkbox" checked={fields.checkbox} onChange={handleChangeFields}/>
        <input type="radio" name="radio" checked={fields.radio} onChange={handleChangeFields}/>
        <input type="submit" value="Send"/>
      </form>
    </div>
  )
}

export default ControlledForm;
