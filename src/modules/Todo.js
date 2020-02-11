export default class Todo {
  constructor(id, title = '', done = false) {
    this.id = id;
    this.title = title;
    this.done = done;
  }

  set title(title) {
    if (!title) {
      throw new TypeError('タイトルが未入力');
    }
    this._title = title;
  }

  complete() {
    this.done = true;
  }

  wip() {
    this.done = false;
  }

  get title() {
    return this._title;
  }
}
