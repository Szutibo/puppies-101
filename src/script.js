var modal = document.getElementById('modalContainer');
var openModalBtn = document.getElementById('modalOpenButton');
var closeBtn = document.getElementById('closeBtn');

openModalBtn.addEventListener('click', openModal);

function openModal() {
    modal.style.display = 'block';
}

closeBtn.addEventListener('click', closeModal);

function closeModal() {
    modal.style.display = 'none';
}