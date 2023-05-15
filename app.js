const addNoteBtn = document.getElementById("addNoteBtn");
const notesList = document.getElementById("notesList");

addNoteBtn.addEventListener("click", () => {
  const note = document.getElementById("note").value;
  const li = document.createElement("li");
  const noteText = document.createTextNode(note);
  li.appendChild(noteText);
  if(note!=""){
    notesList.appendChild(li);

  }
  document.getElementById("note").value = "";
});
