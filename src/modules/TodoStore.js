import Todo from './Todo';

export default class TodoStore {
  constructor() {
    this.todos = TodoStore.restoreTodosFromLocalStorage();
  }

  create(title) {
    const todo = new Todo(this.nextId(), title);
    const todos = [...this.todos, todo];
    this.todos = todos;
  }

  all() {
    return this.todos;
  }

  find(todoId) {
    return this.todos.find(({ id }) => id === todoId);
  }

  update(id, newTodo) {
    const todos = [...this.todos];
    const index = todos.findIndex(todo => todo.id === id);

    todos[index] = newTodo;
    this.todos = todos;
  }

  set todos(todos) {
    this.save2LocalStorage(todos);
    this._todos = todos;
  }

  get todos() {
    return this._todos;
  }

  nextId() {
    return this.todos.length + 1;
  }

  save2LocalStorage(todos) {
    const todoData = todos.map(({ id, title, done }) => ({ id, title, done }));
    window.localStorage.setItem('todos', JSON.stringify(todoData));
  }

  static restoreTodosFromLocalStorage() {
    let todos = window.localStorage.getItem('todos') || [];
    if (todos.length) {
      todos = JSON.parse(todos).map(todo => {
        return new Todo(todo.id, todo.title, todo.done);
      });
    }
    return todos;
  }
}
