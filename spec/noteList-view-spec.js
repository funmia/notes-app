var noteListView = new NoteListView();

it("outputs a given string in HTML format", function(){
  var arrayToPrint = ["Across the centuries...", "Across the fenturies...", "Across the jenturies...", "Across the xenturies..."];
  var expectedOutput = "<ul><li>Across the centuries...</li><li>Across the fenturies...</li><li>Across the jenturies...</li><li>Across the xenturies...</li></ul>";
  return expect(noteListView.toHtml(arrayToPrint)).toEqual(expectedOutput);
});
