function Note(content){
  this._content = content;
  this._title = this.generateTitle(content) + '...';
}

Note.prototype.displayContent = function() {
  return this._content;
};

Note.prototype.generateTitle = function(content) {
  return content.substr(0, 20);
};

Note.prototype.displayTitle = function() {
  return this._title;
};
