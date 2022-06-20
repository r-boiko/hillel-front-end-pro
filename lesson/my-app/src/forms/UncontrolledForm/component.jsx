import {useRef} from "react";

import './styles.scss'

const UncontrolledForm = () => {
  const inputRef = useRef(null);
  const textareaRef = useRef(null);
  const selectRef = useRef(null);
  const checkboxRef = useRef(null);
  const radioRef = useRef(null);

  const handleSubmit = event => {
    event.preventDefault();

    if (!inputRef.current.value || !textareaRef.current.value || !selectRef.current.value) {
      console.log('Error!');
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: inputRef.current.value,
        body: textareaRef.current.value,
        userId: selectRef.current.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  return (
    <div>
      <h1>Uncontrolled Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="input" ref={inputRef}/>
        <textarea name="textarea" cols="30" rows="10" ref={textareaRef}/>
        <select name="select" ref={selectRef}>
          <option value="1">lorem 1</option>
          <option value="2">lorem 2</option>
        </select>
        <input type="checkbox" name="checkbox" ref={checkboxRef}/>
        <input type="radio" name="radio" ref={radioRef}/>
        <input type="submit" value="Send"/>
      </form>
    </div>
  )
}

export default UncontrolledForm;
