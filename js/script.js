'use strict';

let catalogArray = document.getElementsByClassName('catalog-item');

for (let item of catalogArray) {
  if (!item.classList.contains('disabled')) {
    item.onclick = function(e) {
      e.currentTarget.classList.toggle('selected');
    }
  }
}
