const signupForm = document.querySelector('[name="signup"]');
const hasRead = document.querySelectorAll('[name="hasRead"]');
const table = document.querySelector("#table");
const displayTable = document.querySelector('table');

function toCamelCase(str) {
  st_arr = str.split(" ");
  for (let i = 0; i < st_arr.length; i++) {
    word = st_arr[i].charAt(0).toUpperCase() + st_arr[i].slice(1);
    new_word = st_arr[i].replace(st_arr[i], word);
    st_arr[i] = new_word;
  }
  return st_arr.join(" ");
}

function Books(title, author, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let tr = document.createElement("tr");
  let td_title = document.createElement("td");
  td_title.innerText = toCamelCase(event.currentTarget.title.value);
  tr.appendChild(td_title);
  let td_author = document.createElement("td");
  td_author.innerText = toCamelCase(event.currentTarget.author.value);
  tr.appendChild(td_author);
  let td_pages = document.createElement("td");
  td_pages.innerText = parseInt(event.currentTarget.pages.value);
  tr.appendChild(td_pages);
  let td_read = document.createElement("td");
  hasRead.forEach((read) => {
    if (read.checked) {
      td_read.innerText = read.value;
    }
  });
  tr.appendChild(td_read);
  table.appendChild(tr);

  displayTable.style.display = 'table';

  signupForm.reset();
});
