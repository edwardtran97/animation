/* 1. Tìm box
    2. Attack event click
    3. Handle click function */

const box = document.querySelector('#magicBox');
if (box) {
    box.addEventListener('click', (e) => {
        // box.classList.add('active');
        box.classList.toggle('active');
    });
}