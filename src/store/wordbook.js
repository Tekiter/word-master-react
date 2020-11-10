import { observable, action, computed, makeObservable, autorun } from "mobx";

export default class WordBookStore {
  books = [];
  nextId = 0;

  constructor() {
    makeObservable(this, {
      books: observable,
      create: action,
      count: computed,
    });
    autorun(() => {});
  }

  get count() {
    return this.books.length;
  }

  create = ({ name }) => {
    this.books.push({
      id: this.nextId++,
      name,
    });
  };
}
