import { makeAutoObservable, runInAction } from "mobx";

import * as api from "../utils/api";

export default class WordbookStore {
  rawWordList = [];
  name = "";
  id = -1;
  isHideDef = false;
  showDelWord = false;
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

  get count() {
    return this.rawWordList.length;
  }

  async load(id) {
    const book = await api.getWordbook(id);
    runInAction(() => {
      this.rawWordList = book.wordList;
      this.name = book.name;
      this.id = id;

      this.isHideDef = false;
      this.showDelWord = false;
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

  async deleteWord(word) {
    await api.deleteWord(this.id, word);
    await this.update();
  }

  setSearch(search) {
    this.search = search;
  }

  setHideDef(value) {
    this.isHideDef = value;
  }

  setDelWord(value) {
    this.showDelWord = value;
  }

  async sort(sortType) {
    await api.sortWords(this.id, sortType);
    await this.update();
  }
}
