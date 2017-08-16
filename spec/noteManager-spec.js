it("creates a new note", function(){
  var noteManager = new NoteManager();
  noteManager.createNote("hello!");
  return expect(noteManager.getNote()).toBeInstanceOf(Note);
});

it("stores a note", function(){
  var noteManager = new NoteManager();
  var note1 = new Note("notethisnote");
  noteManager.storeNote(note1);
  return expect(noteManager.noteList()).toInclude(note1);
});
