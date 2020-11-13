import { makeAutoObservable, runInAction } from "mobx";

import * as api from "../utils/api";

export default class WordbookStore {
  wordList = [];
  name = "";
  id = -1;

  constructor() {
    makeAutoObservable(this);
  }

  async load(id) {
    const book = await api.getWordbook(id);
    runInAction(() => {
      this.wordList = book.words;
      this.name = book.name;
      this.id = id;
    });
  }

  async changeName(name) {
    this.name = name;
    await api.updateWordbookInfo(this.id, { name });
  }
}
