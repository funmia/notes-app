(function(exports){
  function NoteListView(listElement){
    this._listElement = listElement;
  }

  NoteListView.prototype = {
    toHtml: function(noteArray){
      var outputHtml = "<ul>";
      noteArray.forEach(function(note){
        var noteUrl = note.id();
        console.log(noteUrl)
        outputHtml += "<li> <a href='/#note"+noteUrl+"'>" + note.displayTitle() + "</a> </li>";
      });
      this._listElement.innerHTML = (outputHtml + "</ul>");
    }
  };
  exports.NoteListView = NoteListView;
})(this);
