function randInt(a, b) {
  return a + Math.floor(Math.random() * (b - a + 1));
}

function fakeDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, randInt(100, 500));
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

export async function getWordbookList() {
  await fakeDelay();

  loadList();

  return {
    books,
    nextId,
  };
}

export async function createWordbook(book) {
  await fakeDelay();

  books.push({
    id: nextId++,
    name: book.name,
  });

  saveList();
}
