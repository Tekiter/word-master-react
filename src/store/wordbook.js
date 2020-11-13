import { makeAutoObservable, runInAction } from "mobx";

import * as api from "../utils/api";

export default class WordbookStore {
  wordList = [];
  name = "";

  constructor() {
    makeAutoObservable(this);
  }

  async load(id) {
    const book = await api.getWordbook(id);
    runInAction(() => {
      this.wordList = book.words;
      this.name = book.name;
    });
  }
}
