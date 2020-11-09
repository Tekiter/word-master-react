import { observable, action } from "mobx";

export default class WordBookStore {
  @observable loaded = false;

  constructor(root) {
    this.root = root;
  }

  @action
  create = () => {};
}
