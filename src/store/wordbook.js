import { makeAutoObservable, runInAction } from "mobx";

import * as api from "../utils/api";

export default class WordbookStore {
  rawWordList = [];
  name = "";
  id = -1;
  isHideDef = false;
  search = "";

  constructor() {
    makeAutoObservable(this);
  }

  get wordList() {
    return this.rawWordList.filter(({ word, def }) => {
      if (word.includes(this.search) || def.includes(this.search)) {
        return true;
      }
      return false;
    });
  }

  async load(id) {
    const book = await api.getWordbook(id);
    runInAction(() => {
      this.rawWordList = book.wordList;
      this.name = book.name;
      this.id = id;

      this.isHideDef = false;
      this.search = "";
    });
  }

  async update() {
    const book = await api.getWordbook(this.id);
    runInAction(() => {
      this.rawWordList = book.wordList;
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

  setSearch(search) {
    this.search = search;
  }

  setHideDef(value) {
    this.isHideDef = value;
  }
}
