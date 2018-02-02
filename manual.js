const Manual = function() {
  this.stats = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
  this.points = 27;
  this.base = 8;
};

// Try to increment a stat
Manual.prototype.increment = function(request) {
  request.stat++;
  request.points--;
};

// Try to decrement a stat
Manual.prototype.decrement = function(request) {
  request.stat--;
  request.points++;
};
