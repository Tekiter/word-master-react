import { observable, action, computed, makeObservable, autorun } from "mobx";

export default class WordbookStore {
  books = [];
  nextId = 0;
  current = null;

  constructor() {
    makeObservable(this, {
      books: observable,
      create: action,
      select: action,
      count: computed,
      current: observable,
      selected: computed,
    });
    autorun(() => {});
  }

  get count() {
    return this.books.length;
  }

  get selected() {
    return this.current !== null;
  }

  create = ({ name }) => {
    this.books.push({
      id: this.nextId++,
      name,
    });
  };

  select = ({ id }) => {
    const ref = this.books.find((book) => book.id === id);
    if (ref) {
      this.current = ref;
    } else {
      this.current = null;
    }
  };
}
