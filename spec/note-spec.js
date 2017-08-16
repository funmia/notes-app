var note1 = new Note("Across the centuries. Globular star cluster Cambrian explosion, how far away extraplanetary rich in mystery galaxies consectetur, citizens of distant epochs eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.");

it('creates a note', function(){
  return expect(note1).toBeInstanceOf(Note);
});

it('has a content', function(){
  return expect(note1.displayContent()).toEqual("hello");
});

it('has a title', function(){
  return expect(note1.displayTitle()).toEqual("Across the centuries...");
});
