var listElement = document.getElementById("note-list");
var noteController = new NoteController(NoteManager, NoteListView, listElement);


document.getElementById('note-form').addEventListener("submit", function(event) {
  event.preventDefault();
  textAreaContent = event.target.elements["0"].value;
  noteController.createNote(textAreaContent);
});
