var string = "Across the centuries. Globular star cluster Cambrian explosion, how far away extraplanetary rich in mystery galaxies consectetur, citizens of distant epochs eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
var note1 = new Note(string);

it('creates a note', function(){
  return expect(note1).toBeInstanceOf(Note);
});

it('has a content', function(){
  return expect(note1.displayContent()).toEqual(string);
});

it('has a title', function(){
  return expect(note1.displayTitle()).toEqual("Across the centuries...");
});

it('has an id', function(){
  return expect(note1.id()).toEqual(1);
});
