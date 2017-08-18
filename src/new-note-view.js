function showForm() {
  var noteForm = document.getElementById('note-form');
  if (noteForm.style.visibility == 'hidden') {
    noteForm.style.visibility = 'visible';
  }
  else {
    noteForm.style.visibility = 'hidden';
  }
}
 // document.getElementById('note-form').addEventListener("submit", function(event) {
 //   console.log(event);
 //   console.log(event.target.elements["0"].value);
 //   event.preventDefault();
 // });




// To be implemented when NoteController is ready.
//
// (function(exports) {
//   function  NewNoteView() {
//   }
//
//   NewNoteView.prototype = {
//     showForm: function() {
//       var noteForm = document.getElementById('note-form');
//       if (noteForm.style.visibility == 'hidden') {
//         noteForm.style.visibility = 'visible';
//       }
//       else {
//         noteForm.style.visibility = 'hidden';
//       }
//     }
//   }
//   exports.NewNoteView = NewNoteView;
// })(this);
