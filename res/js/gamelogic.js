///Sections
let characterSelector = document.getElementById('fight')
let versus = document.getElementById('versus');
    let left = document.getElementById('left');
    let right = document.getElementById('right');
    let lightning = document.getElementById('lightning');
    let vs_logo = document.getElementById('vs');
let round_1 = document.getElementById('round-1');
let arena = document.getElementById('arena');
let item_section = document.getElementById('choose-item');
let hud = document.getElementById('hud');
let hud_img = document.getElementById('hud-img');


///Action Cam
let actionCam = document.getElementById('actionCam')
let enemy_actionCam = document.getElementById('enemy-actionCam')
///Player chooses 
let naruto = document.getElementById('naruto');
let ichigo = document.getElementById('ichigo');
///PLayer moves
let hit = document.getElementById('hit');
let shield = document.getElementById('shield');
let special = document.getElementById('special');
///Enemies
let enemy_Health = document.getElementById('enemy-health');
let madara = new Player("Madara", "fire", 5, 20, enemy_Health.value, 10);
//Items
let fire = document.getElementById('fire');
let water = document.getElementById('water');
let wind = document.getElementById('wind');
///Naruto healthbar
let naruto_Health = document.getElementById('naruto-health');
///GameManager
let naruto;
let computer;
//Play as Naruto
function playAsNaruto(){
    characterSelector.style.display = 'none';
    item_section.style.display = 'block';
    hud_img.src = 'res/img/narutoavatar.png';
}
function playAsIchigo(){
    characterSelector.style.display = 'none';
    item_section.style.display = 'block';
    hud_img.src = 'res/img/ichigo-Avatar.png';
}
///Items
function choosesFire(){ 
    item_section.style.display = 'none';
    naruto = new Player(name, "fire", 20, 30, naruto_Health.value, 40);
    console.log(naruto)
    round_1.style.display = 'initial';
}
function choosesWater(){
    item_section.style.display = 'none';
    naruto = new Player(name, "water", 20, 30, naruto_Health.value, 40);
    round_1.style.display = 'initial';
    console.log(naruto)
}
function choosesWind(){
    item_section.style.display = 'none';
    naruto = new Player(name, "wind", 20, 30, naruto_Health.value, 40);
    round_1.style.display = 'initial';
    console.log(naruto)
}
 ///naruto attack
function narutoStrike(){
    actionCam.style.background = 'url(res/img/naruto-attack.gif)';
    actionCam.style.backgroundSize = 'cover';
    hit.disabled = true;
    special.disabled = true;
    shield.disabled = true;
    setTimeout(function(){
        actionCam.style.background = 'none'
        enemy_Health.value -= naruto.attack;
        madaraAction();
    },400)
    if(naruto_Health.value <= 0){
        alert("You've lost!");
        location.reload();
       } 
 }
 ///naruto blocks
function narutoBlock(){
    hit.disabled = true;
    special.disabled = true;
    shield.disabled = true;
    madara.attack-= naruto.block;
    actionCam.style.background = 'url(res/img/naruto-blocking.gif)';
    actionCam.style.backgroundSize = 'cover';
    setTimeout(function(){
        actionCam.style.background = 'none';
        madaraAction()
        madara.attack = 15;

    },1000)
    if(naruto_Health.value <= 0){
        alert("You've lost!");
        location.reload();
       } 
 }
 ///Naruto special
 function specialing() {
    hit.disabled = true;
    special.disabled = true;
    shield.disabled = true;
    actionCam.style.background = 'url(res/img/naruto-special.gif)';
    setTimeout(function(){
        actionCam.style.background = 'none';
        enemy_Health.value -= naruto.spAttack;
        madaraAction()
    },6700);
    if(naruto_Health.value <= 0){
        alert("You've lost!");
        location.reload();
       } 
}
///Madara actions
function madaraAction(){
    let action = [enemyAttacks(),enemySpecialing(),enemyBlocking()];
    action = Math.floor(Math.random()*3);
    
    
    if(enemy_Health.value <= 0){
        alert("You've won!");
        location.reload();
       } 
}
function enemyAttacks(){
    enemy_actionCam.style.background = 'url(res/img/madara-fireBalls.gif';
    enemy_actionCam.style.backgroundSize = 'cover';
    setTimeout(() => {
        hit.disabled = false;
        special.disabled = false;
        shield.disabled = false;
        enemy_actionCam.style.background = 'none';
        naruto_Health.value -= madara.attack; 
    }, 4000);
    if(enemy_Health.value <= 0){
        alert("You've won!");
        location.reload();
       } 
}
///Madara specialing
function enemySpecialing(){
    
    naruto_Health.value -= madara.spAttack; 
    

    if(enemy_Health.value <= 0){
        alert("You've won!");
        location.reload();
       } 
}
function enemyBlocking(){
    hit.disabled = false;
    special.disabled = false;
    shield.disabled = false;
    if (enemy_Health.value <=50){
    enemy_actionCam.style.background = 'url(res/img/madara-blocking.gif';
    enemy_actionCam.style.backgroundSize = 'cover';
    setTimeout(() => {
        enemy_actionCam.style.background = 'none';
        naruto.attack-= 5;
    }, 2500);

 }
}
// function enemyHealing(){
//     hit.disabled = false;
//     special.disabled = false;
//     shield.disabled = false;
//     if (naruto_Health.value <= 20){
//         enemy_actionCam.style.background = 'url(res/img/madara-healing.gif';
//         enemy_actionCam.style.backgroundSize = 'cover';
//     }
//     setTimeout(() => {
//         enemy_actionCam.style.background = 'none';
//         enemy_Health.value += madara.attack + 5;
//     }, 1500);

// }



///Object 
function Player(name, item, attack, spAttack, health, block) {
    this.name = name;
    this.item = item;
    this.attack = attack;
    this.spAttack = spAttack;
    this.health = health;
    this.block = block;
    if (this.item == 'fire'){
        this.attack += 10;
        this.spAttack += 10;
    }
    if (this.item == 'water'){
        this.health += 30;
    }
    if (this.item == 'wind'){
        this.block +=10;
    }
}