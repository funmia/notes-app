(function (exports) {
  var noteId = 0;
  function Note(content){
    this._content = content;
    this._id = noteId++;
    this._title = this.generateTitle(content);
  }

  Note.prototype.id = function(){
    return this._id;
  };

  Note.prototype.displayContent = function() {
    return this._content;
  };

  Note.prototype.generateTitle = function(content) {
    return content.substr(0, 20) + '...';
  };

  Note.prototype.displayTitle = function() {
    return this._title;
  };

  exports.Note = Note;
})(this);
