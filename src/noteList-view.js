(function(exports){
  function NoteListView(){

  }

  NoteListView.prototype = {
    toHtml: function(arrayToPrint){
      var outputHtml = "<ul>";
      arrayToPrint.forEach(function(item){
        outputHtml += "<li>" + item + "</li>";
      });
      return outputHtml += "</ul>";
    }
  };

  exports.NoteListView = NoteListView;
})(this);
