
let ichigoImg = document.getElementById('ichigo');
let narutoImg = document.getElementById('naruto');
let changeBg = document.getElementById('fight');
let actionCam = document.getElementById('actionCam')

let characters = document.getElementById('characters');
let narutoLogo = document.getElementById('narutoLogo');
let makeChoice = document.getElementById('makeChoice');
///Sections
let loading = document.getElementById('loading');
let versus = document.getElementById('versus');
let round_1 = document.getElementById('round-1');
let arena = document.getElementById('arena');
///Player moves
let hit = document.getElementById('hit');
let heal = document.getElementById('heal');
let shield = document.getElementById('shield');
let special = document.getElementById('special');

let attack = Math.floor(Math.random()*33); 
let healingPoint = Math.floor(Math.random()*33); 
let shieldedPoints = Math.floor(Math.random()*33); 
///Enemy moves
let enemyAttack = Math.floor(Math.random()*33); 
let enemyHeal = Math.floor(Math.random()*33);
let enemyShield = Math.floor(Math.random()*33);
let enemyMoves = [enemyAttacking, enemyHealing, enemyShielding, enemySpecialing];
///Health Bars
let enemy_Health = document.getElementById('enemy-health');
let naruto_Health = document.getElementById('naruto-health');
///Events
ichigoImg.addEventListener('click', clickIchigo);
function clickIchigo(){
    ichigoImg.src = 'res/img/ichigo-clicked.png';
}
narutoImg.addEventListener('click', clickNaruto);
function clickNaruto(){
    narutoImg.src = 'res/img/naruto-selected.gif';
    narutoLogo.style.display = 'block';
    setTimeout(function(){
        cleanUp();
    },1500)
}
///Clean up before Game Starts
function cleanUp(){
 versus.style.display = 'none';
 makeChoice.style.display = 'none';
 characters.style.display = 'none';
 changeBg.style.background = 'url(res/img/arena.jpg)';
 changeBg.style.backgroundSize = 'cover';
 round_1.style.display = 'block';
}

///Naruto Attacks

hit.addEventListener('click', narutoStrike);

function narutoStrike(){
   actionCam.style.background = 'url(res/img/naruto-attack.gif)';
   actionCam.style.backgroundSize = 'cover';
   hit.disabled = true;
   setTimeout(function(){
       actionCam.style.background = 'none'
       enemy_Health.value -= attack;
   },4000)
   if(enemy_Health.value < 1){
    alert("You've won!");
    location.reload();
   } 
   enemyAction();
}
///Naruto Heals
heal.addEventListener('click', healing)

function healing() {
    naruto_Health.value += healingPoint;

    console.log(naruto_Health.value)
}
///Naruto Shields
shield.addEventListener('click', shielding);

function shielding(){
    enemyAttack -= shieldedPoints;
}
///Naruto Speacial
special.addEventListener('click', specialing);

function specialing(){
    actionCam.style.background = 'url(res/img/naruto-special.gif)';
    special.disabled = true;
    setTimeout(function(){
        actionCam.style.background = 'none';
        enemy_Health.value -= attack * 2;
    },6700);
    if(enemy_Health.value < 1){
        alert("You've won!");
        location.reload();
       } 
       enemyAction();
}
///Enemy attacks

function enemyAction() {
    enemyMoves = Math.floor(Math.random().lenght);
}
function enemyAttacking(){
    naruto_Health.value -= enemyAttack;
}
function enemyHealing(){
    enemy_Health.value += enemyHeal;
}
function enemyShielding(){
    enemyShield = attack;
    enemyShield -= attack;
}
function enemySpecialing(){
    let enemySpecial = enemyAttack * 2;
    naruto_Health.value -= enemySpecial;
}

console.log(attack);








// let enemyHit = document.getElementById('enemy-hit');
// let enemyHeal = document.getElementById('enemy-heal');
// let enemyShield = document.getElementById('enemy-shield');
// let enemySpecial = document.getElementById('enemy-speacial');