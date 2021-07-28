import './styles.css';

import { Todo, TodoList } from './classes'
// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class.js';

import { crearTodoHtml } from './js/componentes.js';

// const tarea = new Todo('Aprender JavaScript');

export const todoList = new TodoList();

// todoList.nuevoTodo( tarea );

// tarea.completado = true;


console.log( todoList.todos );

todoList.todos.forEach( todo => crearTodoHtml(todo));
//Como se envia un único argumento Esto es igual a:
//todoList.todos.forEach( crearTodoHtml );


// crearTodoHtml( tarea );

//Ejemplo de LocalStorage

// localStorage.setItem('My-Key', 'America1492');
// sessionStorage.setItem('My-other-key', 'Lamisma.com');
//Remover elementos del LocalStorage

// setTimeout( () => {
//     localStorage.removeItem('My-Key');
// }, 1500);

const newTodo = new Todo('Aprender JavaScript');
todoList.nuevoTodo( newTodo );

console.log( 'todos', todoList.todos);
