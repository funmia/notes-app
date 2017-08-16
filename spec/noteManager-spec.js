it("creates a new note", function(){
  var noteManager = new NoteManager();
  noteManager.createNote("hello!");
  return expect(noteManager.noteList[-1]).toBeInstanceOf(Note);
});
