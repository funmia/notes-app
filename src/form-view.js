function showForm() {
  var noteForm = document.getElementById('note-form');
  if (noteForm.style.visibility == 'hidden') {
    noteForm.style.visibility = 'visible';
  }
  else {
    noteForm.style.visibility = 'hidden';
  }
}
