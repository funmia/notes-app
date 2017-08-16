function NoteManager(){
  this._noteList = [];
}

NoteManager.prototype.createNote = function(noteContent){
  var newNote = new Note(noteContent);
  console.log(newNote);
  this.storeNote(newNote);
};

NoteManager.prototype.storeNote = function(note){
  this._noteList.push(note);
};

NoteManager.prototype.getNote = function(){
  return this._noteList[this._noteList.length - 1];
};

NoteManager.prototype.noteList = function(){
  return this._noteList;
};
