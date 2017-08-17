(function(exports){
  function NoteController() {
    this._noteManager = new noteManager();
  }

  NoteController.prototype = {
    displayList: function() {
      var noteList = this._noteManager.noteList();
      notelist.foreach(function(element){
      noteView.toHtml(element._title());
    });
    }
  };

  exports.NoteController = NoteController;
})(this);

NoteController.display();
