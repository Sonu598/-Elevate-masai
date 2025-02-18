document.addEventListener("DOMContentLoaded", showNotes);
function createNote() {
  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;
  let category = document.getElementById("category").value;
  let notesObj;
  let myObj = {
    title: title,
    content: content,
    category: category,
  };
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  title.value = "";
  content.value = "";
  category.value = "work";
  showNotes();
  filterNote();
}

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let noteSpace = document.getElementById("notes-space");
  notesObj.forEach(function (element, index) {
    noteSpace.innerHTML += `
        <div class="note-card">
        <h3>${element.title}</h3>
        <p>${element.content}</p>
        <p>${element.category}</p>
        <button id="${index}" onclick="deleteNote(this.id)">Delete Note</button>
        </div>`;
  });
  if (notesObj.length === 0) {
    noteSpace.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

function filterNote() {
  let filterValue = document.getElementById("filter").value;
  let noteCards = document.getElementsByClassName("note-card");
  Array.from(noteCards).forEach(function (element) {
    let cardText = element.getElementsByTagName("p")[0].innerText;
    if (cardText.includes(filterValue)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}

function sortNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    } else {
      return 1;
    }
  });
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}
