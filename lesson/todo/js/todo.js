(function() {
  // selecting dom elements for manipulation
  const tipBtn = qs('.tipBtn');
  const closebtn = qs('.closebtn');
  const pencil = qs('#pencil');
  const overlay = qs('#overlay');
  const todoText = qs('.todoText');
  const todos = qs('.todos');
  const clear = qs('.clear');

  // function to delete todo if delete span is clicked.
  clear.addEventListener('click', function () {
    todos.innerHTML = '';
  })

  // function to load todo if list is found in local storage.

  // event listener for input to add new todo to the list.
  todoText.addEventListener('keyup', function (e) {
   if(e.which === 13) {
      createNewTodo(e.target);
    }
  })

  // event listener to linethrough list if clicked
  todos.addEventListener('click', function (e) {
    const currentElement = e.target;

    if(currentElement.classList.contains('todo')) {
      currentElement.classList.toggle('checked');
    }
  })

  // hide input box, when pencil icon is clicked
  pencil.addEventListener('click', function () {
    todoText.classList.toggle('display');
  })

  // save todolist state so user can access it later

  // clear all todo when clear button is clicked
  todos.addEventListener('click', function (e) {
    const currentElement = e.target;

    if(currentElement.classList.contains('removeTodo')) {
      currentElement.parentElement.remove();
    }
  })

  // display overlay when tips btn is clicked
  tipBtn.addEventListener('click', function () {
    console.log('click');
    overlay.style.height = '100%';
  })

  // close overlay when close btn is clicked
  closebtn.addEventListener('click', function (e) {
    e.preventDefault();
    overlay.style.height = '0';
  })

  // helpers
  function qs(selector) {
    return document.querySelector(selector);
  }

  function createNewTodo(element) {
    if(!element.value) return;

    const li = document.createElement('li');
    li.textContent = element.value;
    li.classList.add('todo');
    const span = document.createElement('span');
    span.classList.add('removeTodo');
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-trash-alt');

    span.append(icon);
    li.prepend(span);
    todos.append(li);

    element.value = '';
  }
})()
