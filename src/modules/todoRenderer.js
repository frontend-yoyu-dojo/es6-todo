import TodoStore from './TodoStore';
import Handlebars from 'handlebars';

export const renderTodos = () => {
  const todoStore = new TodoStore();
  const source = document.getElementById('todo-list-item').innerHTML;
  const template = Handlebars.compile(source);
  const todoListElement = document.querySelector('.todo-list');
  const todoHtml = todoStore.all().map(todo => {
    return template({
      id: todo.id,
      title: todo.title,
      done: todo.done,
      doneClass: todo.done ? 'done' : '',
    });
  });

  todoListElement.innerHTML = todoHtml.join('');
};
