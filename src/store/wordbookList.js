import { makeAutoObservable, runInAction } from "mobx";

import * as api from "../utils/api";

export default class WordbookStore {
  books = [];
  nextId = 0;
  current = null;

  constructor() {
    // makeObservable(this, {
    //   books: observable,
    //   create: action,
    //   select: action,
    //   save: action,
    //   load: action,
    //   count: computed,
    //   current: observable,
    //   selected: computed,
    // });
    makeAutoObservable(this);
    this.load();
  }

  get count() {
    return this.books.length;
  }

  get selected() {
    return this.current !== null;
  }

  async load() {
    // const obj = localStorage.getItem("wordbookList");
    // if (obj) {
    //   this.books = JSON.parse(obj);

    //   let maxId = -1;
    //   this.books.forEach((book) => {
    //     maxId = Math.max(maxId, book.id);
    //   });
    //   this.nextId = maxId + 1;
    // }

    const res = await api.getWordbookList();
    runInAction(() => {
      this.books = res.books;
      this.nextId = res.nextId;
    });
  }

  async create({ name }) {
    await api.createWordbook({
      name,
    });
    await this.load();
  }

  select = ({ id }) => {
    const ref = this.books.find((book) => book.id === id);
    if (ref) {
      this.current = ref;
    } else {
      this.current = null;
    }
  };
}
