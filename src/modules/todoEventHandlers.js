import TodoStore from './TodoStore';
import { renderTodos } from './todoRenderer';
const todoStore = new TodoStore();

const findInputElement = todoId => {
  return document.querySelector(`input.edit-todo-title[data-id="${todoId}"]`);
};

export const handleClickCreate = () => {
  const { value: title } = document.querySelector('.new-todo-title');
  todoStore.create(title);
  renderTodos();
};

export const handleClickEdit = ({ target }) => {
  const input = findInputElement(target.dataset.id);
  input.readOnly = false;
  input.classList.remove('uneditable');
};

export const handleClickSave = ({ target }) => {
  const id = target.dataset.id;
  const todo = todoStore.find(id);
  const inputElement = findInputElement(id);
  const { value: title } = inputElement;
  todo.update({ title });

  inputElement.readOnly = true;
  inputElement.classList.add('uneditable');
};

export const handleChangeDone = ({ target }) => {
  const input = findInputElement(target.dataset.id);
  input.classList.toggle('done');

  const todoId = target.dataset.id;
  const todo = todoStore.find(Number(todoId));
  todo.done = target.checked;
  todoStore.update(todoId, todo);
};
