import { renderTodos } from './modules/todoRenderer';
import {
  handleClickCreate,
  handleClickEdit,
  handleChangeDone,
  handleClickSave,
} from './modules/todoEventHandlers';

window.addEventListener('load', () => {
  document
    .querySelector('button.create')
    .addEventListener('click', handleClickCreate);
  renderTodos();
});

window.addEventListener('click', event => {
  if (!event.target.dataset.id) return;

  if (event.target.matches('button.edit')) handleClickEdit(event);
  if (event.target.matches('input.done')) handleChangeDone(event);
  if (event.target.matches('button.save')) handleClickSave(event);
});
