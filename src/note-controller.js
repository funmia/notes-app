(function(exports){
  function NoteController() {
    this._noteManager = new noteManager();
  }

  NoteController.prototype = {
    displayList: function() {
      var noteList = this._noteManager.noteList();
      var noteListTitles = [];
      notelist.forEach(function(element){
        noteListTitles.push(element._title());
      });
    noteListView.toHtml(noteListTitles);
    }
  };

  exports.NoteController = NoteController;
})(this);

NoteController.display();
