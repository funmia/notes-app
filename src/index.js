var outputElement = document.getElementById("output-element");
var noteController = new NoteController(NoteManager, NoteListView, SingleNoteView, outputElement);


document.getElementById('note-form').addEventListener("submit", function(event) {
  event.preventDefault();
  textAreaContent = event.target.elements["0"].value;
  noteController.createNote(textAreaContent);
});

window.addEventListener("hashchange", function() {
  console.log(location.hash);
  console.log("here");
  var hash = location.hash;
  var id = hash.substring(1, hash.length);
  noteController.displayNote(id);
});
