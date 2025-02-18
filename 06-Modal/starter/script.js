'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', function () {
    modal.style.display = 'block';
    overlay.style.display = 'block';
  });
}

btnCloseModal.addEventListener('click', function () {
  modal.style.display = 'none';
  overlay.style.display = 'none';
});
