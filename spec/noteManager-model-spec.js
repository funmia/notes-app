it("creates a new note", function(){
  var noteManager = new NoteManager();
  noteManager.createNote("hello!");
  return expect(noteManager.getNote(0)).toBeInstanceOf(Note);
});

it("stores a note", function(){
  var noteManager = new NoteManager();
  var note1 = new Note("notethisnote");
  noteManager.storeNote(note1);
  return expect(noteManager.noteList()).toInclude(note1);
});

it("returns the content of a specific note", function(){
  var noteManager = new NoteManager();
  noteManager.createNote("First note");
  noteManager.createNote("Second note");
  noteManager.createNote("Third note");

  return expect(noteManager.getNote(1).displayContent()).toEqual("Second note");
});
