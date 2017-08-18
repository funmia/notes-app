(function(exports){
  function SingleNoteView(outputElement){
    this._outputElement = outputElement;
  }

  SingleNoteView.prototype = {
    toHtml: function(note){
      this._outputElement.innerHTML = "<p>" + note.displayContent() + "</p>";
    }
  };
  exports.SingleNoteView = SingleNoteView;
})(this);
