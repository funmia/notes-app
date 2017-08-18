(function(exports){
  function NoteListView(listElement){
    this._listElement = listElement;
  }

  NoteListView.prototype = {
    toHtml: function(arrayToPrint){
      var outputHtml = "<ul>";
      arrayToPrint.forEach(function(item){
        outputHtml += "<li>" + item + "</li>";
      });


      console.log(this._listElement.innerHTML);

      this._listElement.innerHTML = (outputHtml + "</ul>");
      console.log(this._listElement.innerHTML);
    }
  };
  exports.NoteListView = NoteListView;
})(this);
