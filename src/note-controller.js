(function(exports){
  function NoteController(noteManagerInstance) {
    this._noteManager = new noteManagerInstance();
  }
var noteControl = new NoteController(NoteManager);
var textAreaContent;

  NoteController.prototype = {
    createNote: function(textAreaContent) {
        noteControl._noteManager.createNote(textAreaContent);
        console.log(noteControl._noteManager.noteList());
    },

    displayList: function() {
      var noteList = this._noteManager.noteList();
      var noteListTitles = [];
      noteList.forEach(function(element){
        noteListTitles.push(element._title);
      });
    return noteListView.toHtml(noteListTitles);
    }
  };

  document.getElementById('note-form').addEventListener("submit", function(event) {
    event.preventDefault();
    textAreaContent = event.target.elements["0"].value;
    NoteController.prototype.createNote(textAreaContent)
  });

  exports.NoteController = NoteController;
})(this);
