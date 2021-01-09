import './styles.css';
import { Todo, TodoList } from './class';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);


//const newTodo = new Todo('Aprender Javascript');
//todoList.nuevoTodo(newTodo);
//console.log('todos', todoList.todos);

//todoList.todos[0].imprimirClase();

//newTodo.imprimirClase();