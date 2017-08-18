function NoteManager(){
  this._noteList = [];
}

NoteManager.prototype.createNote = function(noteContent){
  var newNote = new Note(noteContent);
  this.storeNote(newNote);
};

NoteManager.prototype.storeNote = function(note){
  this._noteList.push(note);
};

NoteManager.prototype.getNoteById = function(noteId){
  var foundNote = this._noteList.find(function(note) {
    return note.id() == noteId;
  });
  return foundNote;
};

NoteManager.prototype.noteList = function(){
  return this._noteList;
};
