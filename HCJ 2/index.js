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
}

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let noteSpace = document.getElementById("note-space");
  notesObj.forEach(function (element, index) {
    noteSpace.innerHTML += `
        <div class="note-card">
        <h3>${element.title}</h3>
        <p>${element.content}</p>
        <p>${element.category}</p>
        <button id="${index}" onclick="deleteNode(this.id)">Delete Note</button>
        </div>`;
  });
  if (notesObj.length === 0) {
    noteSpace.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

function deleteNode(index) {
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

document.addEventListener("DOMContentLoaded", showNotes);
