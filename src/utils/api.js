function randInt(a, b) {
  return a + Math.floor(Math.random() * (b - a + 1));
}

function fakeDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, randInt(0, 50));
  });
}

let nextId = 0;
let books = [];

function loadList() {
  const obj = localStorage.getItem("wordbookList");

  if (obj) {
    books = JSON.parse(obj);

    let maxId = -1;
    books.forEach((book) => {
      maxId = Math.max(maxId, book.id);
    });
    nextId = maxId + 1;
  } else {
    books = [];
    nextId = 0;
  }
}

function saveList() {
  const jobj = JSON.stringify(books);
  localStorage.setItem("wordbookList", jobj);
}

function loadBook(id) {
  const obj = localStorage.getItem(`wordbook-${id}`);
  if (!obj) {
    throw new Error("No book id " + id);
  }
  const book = JSON.parse(obj);
  if (book.wordList === undefined) {
    book.wordList = [];
  }
  return book;
}

function saveBook(book) {
  if (book.id === undefined) {
    return;
  }
  localStorage.setItem(`wordbook-${book.id}`, JSON.stringify(book));
}

function removeBook(id) {
  localStorage.removeItem(`wordbook-${id}`);
}

export async function getWordbookList() {
  await fakeDelay();

  loadList();

  return {
    books: books.map((book) => {
      const bookObj = loadBook(book.id);
      return {
        id: book.id,
        name: bookObj.name,
      };
    }),
    nextId,
  };
}

export async function createWordbook(bookInfo) {
  await fakeDelay();

  const bookIndex = {
    id: nextId++,
  };

  books.push(bookIndex);

  const book = {
    id: bookIndex.id,
    name: bookInfo.name,
    wordList: [],
  };
  saveBook(book);
  saveList();
}

export async function getWordbook(id) {
  await fakeDelay();

  const book = loadBook(id);

  return book;
}

export async function deleteWordbook(id) {
  const idx = books.findIndex((bookIndex) => bookIndex === id);

  books.splice(idx, 1);

  saveList();
  removeBook();
}