const btn = document.querySelector(".openme");

btn.addEventListener('click', function() {
    const overlaydiv = document.createElement('div');
    overlaydiv.className = 'overlay';

    const data = document.createElement('div');
    data.className= 'forms';
    data.innerHTML = `
    <div class="H3">
    <h3>Add a New Book</h3>
    </div>
    <form id="book-form">
        <label for="title">Book Title</label>
        <input type="text" id="title" name="title" required>
        <label for="author">Author</label>
        <input type="text" id="author" name="author" required>
        <label for="year">Year</label>
        <input type="number" id="year" name="year" required>
         <label for="pages">total no.of pages</label>
        <input type="number" id="page" name="pages" required>
        <button type="submit">Submit</button>
    </form>
`;
overlaydiv.appendChild(data);
document.body.appendChild(overlaydiv);

const bookdata = document.getElementById('book-form')
bookdata.addEventListener('submit', function(event){
    event.preventDefault();
const title= document.getElementById('title').value;
const author= document.getElementById('author').value;
const year= document.getElementById('year').value;
const totalpage= document.getElementById('page').value;
const bookEntry = document.createElement('div');
bookEntry.className = 'book-entry';
bookEntry.innerHTML = `<strong>Title:</strong> ${title} <br> <strong>Author:</strong> ${author} <br> <strong>Year:</strong> ${year} <strong>pages:</strong> ${totalpage}
 <label class="switch">
    <input type="checkbox" id="read-checkbox">
    <span class="slider"></span>
     <span>Read</span>
  </label>`;

// Append the new book entry to the book list
document.querySelector('.booklist').appendChild(bookEntry);
document.body.removeChild(overlaydiv);








})








})