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

NoteManager.prototype.getNote = function(index){
  return this._noteList[index];
};

NoteManager.prototype.noteList = function(){
  return this._noteList;
};
