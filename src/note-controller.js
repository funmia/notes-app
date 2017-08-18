(function(exports){
  function NoteController(noteManagerModel, noteListView, listElement) {
    this._noteManager = new noteManagerModel();
    this._noteListView = new noteListView(listElement);
  }

  NoteController.prototype = {
    createNote: function(textAreaContent) {
      this._noteManager.createNote(textAreaContent);
      console.log(this._noteManager.noteList());
      this.displayList();
    },

    displayList: function() {
      var noteList = this._noteManager.noteList();
      // var noteListTitles = [];
      // noteList.forEach(function(element){
      //   noteListTitles.push(element._title);
      // });
      this._noteListView.toHtml(noteList);
    }
  };

  exports.NoteController = NoteController;
})(this);
