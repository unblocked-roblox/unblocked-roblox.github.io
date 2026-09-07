
(function () {
  'use strict';
  var input = document.getElementById('game-search');
  if (!input) return;
  var cards = Array.prototype.slice.call(document.querySelectorAll('.grid-3, .grid-2'));
  input.addEventListener('input', function () {
    var q = input.value.trim().toLowerCase();
    cards.forEach(function (col) {
      var title = col.querySelector('.list-title');
      if (!title) return;
      col.style.display = !q || title.textContent.toLowerCase().indexOf(q) !== -1 ? '' : 'none';
    });
  });
})();
