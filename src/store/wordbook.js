import { makeAutoObservable, runInAction } from "mobx";

import * as api from "../utils/api";

export default class WordbookStore {
  wordList = [];
  name = "";
  id = -1;
  isHideDef = false;

  constructor() {
    makeAutoObservable(this);
  }

  async load(id) {
    const book = await api.getWordbook(id);
    runInAction(() => {
      this.wordList = book.wordList;
      this.name = book.name;
      this.id = id;
    });
  }

  async update() {
    const book = await api.getWordbook(this.id);
    runInAction(() => {
      this.wordList = book.wordList;
      this.name = book.name;
    });
  }

  async changeName(name) {
    this.name = name;
    await api.updateWordbookInfo(this.id, { name });
  }

  async addWord({ word, def }) {
    await api.addWord(this.id, { word, def });
    await this.update();
  }

  setHideDef(value) {
    this.isHideDef = value;
  }
}
