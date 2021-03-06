(function(exports){
  function NoteController(noteManagerModel, noteListView, singleNoteView, outputElement) {
    this._noteManager = new noteManagerModel();
    this._noteListView = new noteListView(outputElement);
    this._singleNoteView = new singleNoteView(outputElement);
  }

  NoteController.prototype = {
    createNote: function(textAreaContent) {
      this._noteManager.createNote(textAreaContent);
      console.log(this._noteManager.noteList());
      this.displayList();
    },

    displayList: function() {
      var noteList = this._noteManager.noteList();
      this._noteListView.toHtml(noteList);
    },

    displayNote: function(noteId) {
      var note = this._noteManager.getNoteById(noteId);
      this._singleNoteView.toHtml(note);
    }

  };

  exports.NoteController = NoteController;
})(this);
