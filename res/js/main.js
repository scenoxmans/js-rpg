let ichigoImg = document.getElementById('ichigo');
let narutoImg = document.getElementById('naruto');
let attack = document.getElementById('hit');
let heal = document.getElementById('heal');
let shield = document.getElementById('shield');

ichigoImg.addEventListener('click', clickIchigo);
function clickIchigo(){
    ichigoImg.src = 'res/img/ichigo-clicked.png';
}
narutoImg.addEventListener('click', clickNaruto);
function clickNaruto(){
    narutoImg.src = 'res/img/naruto-clicked.png';
}

