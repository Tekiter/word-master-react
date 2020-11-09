import WordBookStore from "./wordbook";

class RootStore {
  constructor() {
    this.counter = new WordBookStore(this);
  }
}

export default RootStore;
