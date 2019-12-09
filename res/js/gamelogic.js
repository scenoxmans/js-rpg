///Sections
let selector = document.getElementById('selector');
let item_selector = document.getElementById('choose-item');
let loading = document.getElementById('loading');
let arena = document.getElementById('arena');
let chat = document.getElementById('log-chat');
///Avatars
let p1_avatar = document.getElementById('p1-avatar');
let p1_item = document.getElementById('p1-item')
let p2_avatar = document.getElementById('p2-avatar');
let p2_item = document.getElementById('p2-item');
///Characters img selector
p1_naruto_selected = document.getElementById('img-naruto-p1');
p1_madara_selected = document.getElementById('img-madara-p1');
p1_sasuke_selected = document.getElementById('img-sasuke-p1');
p1_itachi_selected = document.getElementById('img-itachi-p1');
p2_naruto_selected = document.getElementById('img-naruto-p2');
p2_madara_selected = document.getElementById('img-madara-p2');
p2_sasuke_selected = document.getElementById('img-sasuke-p2');
p2_itachi_selected = document.getElementById('img-itachi-p2');
///Elements img selector
p1_fire_btn = document.getElementById('p1-fire-btn');
p1_water_btn = document.getElementById('p1-water-btn');
p1_wind_btn = document.getElementById('p1-wind-btn');
p1_earth_btn = document.getElementById('p1-earth-btn');
p2_fire_btn = document.getElementById('p2-fire-btn');
p2_water_btn = document.getElementById('p2-water-btn');
p2_wind_btn = document.getElementById('p2-wind-btn');
p2_earth_btn = document.getElementById('p2-earth-btn');
///Players
let player1;
let player2;
///Characters P1
let p1_naruto = document.getElementById('naruto-p1');
let p1_madara = document.getElementById('madara-p1');
let p1_sasuke = document.getElementById('sasuke-p1');
let p1_itachi = document.getElementById('itachi-p1');
p1_naruto.addEventListener('click', p1_createNaruto);
p1_madara.addEventListener('click', p1_createMadara);
p1_sasuke.addEventListener('click', p1_createSasuke);
p1_itachi.addEventListener('click', p1_createItachi);
///Characters P2
let p2_naruto = document.getElementById('naruto-p2');
let p2_madara = document.getElementById('madara-p2');
let p2_sasuke = document.getElementById('sasuke-p2');
let p2_itachi = document.getElementById('itachi-p2');
p2_naruto.addEventListener('click', p2_createNaruto);
p2_madara.addEventListener('click', p2_createMadara);
p2_sasuke.addEventListener('click', p2_createSasuke);
p2_itachi.addEventListener('click', p2_createItachi);
///PLayer 1 moves
let p1_hit = document.getElementById('p1-attack');
let p1_heal = document.getElementById('p1-heal');
let p1_run = document.getElementById('p1-run');
p1_hit.style.cursor = 's-resize';
p1_heal.style.cursor = 'cell';
p1_run.style.cursor = 'help';

p1_hit.addEventListener('click', p1Attack);
p1_heal.addEventListener('click', p1Heal);
p1_run.addEventListener('click', p1Run);

///PLayer 2 moves
let p2_hit = document.getElementById('p2-attack');
let p2_heal = document.getElementById('p2-heal');
let p2_run = document.getElementById('p2-run');
p2_hit.style.cursor = 'not-allowed';
p2_heal.style.cursor = 'not-allowed';
p2_run.style.cursor = 'help';

p2_hit.disabled = true;
p2_heal.disabled = true;

p2_hit.addEventListener('click', p2Attack);
p2_heal.addEventListener('click', p2Heal);
p2_run.addEventListener('click', p2Run);
///Items P1
let p1_fire = document.getElementById('fire-p1');
let p1_water = document.getElementById('water-p1');
let p1_wind = document.getElementById('wind-p1');
let p1_earth = document.getElementById('earth-p1');
p1_fire.addEventListener('click', p1_getFire);
p1_water.addEventListener('click', p1_getWater);
p1_wind.addEventListener('click', p1_getWind);
p1_earth.addEventListener('click', p1_getEarth);
///Items P2
let p2_fire = document.getElementById('fire-p2');
let p2_water = document.getElementById('water-p2');
let p2_wind = document.getElementById('wind-p2');
let p2_earth = document.getElementById('earth-p2');
///Player-1 Choices
function p1_createNaruto(){
    p1_madara.src = 'res/img/madara-selected.png'
    player1 = new Person("Naruto", undefined , 21, 130, 130, 15, 4);
    if(player1.name == "Naruto"){
        p2_naruto.disabled = true;
        p1_avatar.src = 'res/img/naruto-avatar.png';
    }
    p1_naruto.classList.add('p1');
    p1_madara_selected.src = 'res/img/madara-selected.png';
    p1_sasuke_selected.src = 'res/img/sasuke-selected.png';
    p1_itachi_selected.src = 'res/img/itachi-selected.png';
    p2_naruto_selected.src = 'res/img/naruto-selected.png';
    playersReady()
    updateHealth()
    disableAllP1()
}
function p1_createMadara(){
    player1 = new Person("Madara", undefined , 25, 230, 230, 5, 4);
    if(player1.name == "Madara"){
        p2_madara.disabled = true;
        p1_avatar.src = 'res/img/madara-avatar.png';
    }
    p1_madara.classList.add('p1');
    p2_madara_selected.src = 'res/img/madara-selected.png';
    p1_sasuke_selected.src = 'res/img/sasuke-selected.png';
    p1_itachi_selected.src = 'res/img/itachi-selected.png';
    p1_naruto_selected.src = 'res/img/naruto-selected.png';
    playersReady()
    updateHealth()
    disableAllP1()
}
function p1_createSasuke(){
    player1 = new Person("Sasuke", undefined , 22, 100, 100, 8, 4);
    if(player1.name == "Sasuke"){
        p2_sasuke.disabled = true;
        p1_avatar.src = 'res/img/sasuke-avatar.png';
    }
    p1_sasuke.classList.add('p1');
    p1_madara_selected.src = 'res/img/madara-selected.png';
    p2_sasuke_selected.src = 'res/img/sasuke-selected.png';
    p1_itachi_selected.src = 'res/img/itachi-selected.png';
    p1_naruto_selected.src = 'res/img/naruto-selected.png';
    playersReady()
    updateHealth()
    disableAllP1()
}
function p1_createItachi(){
    player1 = new Person("Itachi", undefined , 21, 80, 80, 10, 6);
    if(player1.name == "Itachi"){
        p2_itachi.disabled = true;
        p1_avatar.src = 'res/img/itachi-avatar.png';
    }
    p1_itachi.classList.add('p1');
    p1_madara_selected.src = 'res/img/madara-selected.png';
    p1_sasuke_selected.src = 'res/img/sasuke-selected.png';
    p2_itachi_selected.src = 'res/img/itachi-selected.png';
    p1_naruto_selected.src = 'res/img/naruto-selected.png';
    playersReady()
    updateHealth()
    disableAllP1()
}
///Player-2 Choices
function p2_createNaruto(){
    player2 = new Person("Naruto", undefined , 20, 130, 130, 15, 3);
    if(player2.name == "Naruto"){
        p1_naruto.disabled = true;
        p2_avatar.src = 'res/img/naruto-avatar.png';
    }
    p2_naruto.classList.add('p2');
    p2_madara_selected.src = 'res/img/madara-selected.png';
    p2_sasuke_selected.src = 'res/img/sasuke-selected.png';
    p2_itachi_selected.src = 'res/img/itachi-selected.png';
    p1_naruto_selected.src = 'res/img/naruto-selected.png';
    playersReady()
    updateHealth()
    disableAllP2()
}
function p2_createMadara(){
    player2 = new Person("Madara", undefined , 25, 230, 230, 5, 4);
    if(player2.name == "Madara"){
        p1_madara.disabled = true;
        p2_avatar.src = 'res/img/madara-avatar.png';
    }
    p2_madara.classList.add('p2');
    p1_madara_selected.src = 'res/img/madara-selected.png';
    p2_sasuke_selected.src = 'res/img/sasuke-selected.png';
    p2_itachi_selected.src = 'res/img/itachi-selected.png';
    p2_naruto_selected.src = 'res/img/naruto-selected.png';
    playersReady()
    updateHealth()
    disableAllP2()
}
function p2_createSasuke(){
    player2 = new Person("Sasuke", undefined , 22, 100, 100, 8, 4);
    if(player2.name == "Sasuke"){
        p1_sasuke.disabled = true;
        p2_avatar.src = 'res/img/sasuke-avatar.png';
    }
    p2_sasuke.classList.add('p2');
    p2_madara_selected.src = 'res/img/madara-selected.png';
    p1_sasuke_selected.src = 'res/img/sasuke-selected.png';
    p2_itachi_selected.src = 'res/img/itachi-selected.png';
    p2_naruto_selected.src = 'res/img/naruto-selected.png';
    playersReady()
    updateHealth()
    disableAllP2()
}
function p2_createItachi(){
    player2 = new Person("Itachi", undefined , 21, 80, 80, 10, 6);
    if(player2.name == "Itachi"){
        p1_itachi.disabled = true;
        p2_avatar.src = 'res/img/itachi-avatar.png';
    }
    p2_itachi.classList.add('p2');
    p2_madara_selected.src = 'res/img/madara-selected.png';
    p2_sasuke_selected.src = 'res/img/sasuke-selected.png';
    p1_itachi_selected.src = 'res/img/itachi-selected.png';
    p2_naruto_selected.src = 'res/img/naruto-selected.png';
    playersReady()
    updateHealth()
    disableAllP2()
}
//Item Selection P1
function p1_getFire(){
    player1.item = p1_fire.value;
    player1.attack += 30 / 100 * player1.attack;
    if(player1.item == "fire"){
        p1_item.src = 'res/img/fire-main.png';
    }
    p1_fire_btn.classList.add('scale');
    disableAllItemsP1()
    console.log(player1)
    itemsAreSelected()
    p1_water_btn.src = 'res/img/water-selected.png';
    p1_wind_btn.src = 'res/img/wind-selected.png';
    p1_earth_btn.src = 'res/img/earth-selected.png';
}
function p1_getWater(){
    player1.item = p1_water.value;
    player1.healingPoints += 20 / 100 * player1.healingPoints;
    disableAllItemsP1()
    if(player1.item == "water"){
        p1_item.src = 'res/img/water-main.png';
    }
    p1_water_btn.classList.add('scale');
    p1_fire_btn.src = 'res/img/fire-selected.png';
    p1_wind_btn.src = 'res/img/wind-selected.png';
    p1_earth_btn.src = 'res/img/earth-selected.png';
    console.log(player1)
    itemsAreSelected()
}
function p1_getWind(){
    player1.item = p1_wind.value;
    player1.dodgeChance += 20 / 100 * player1.dodgeChance;
    disableAllItemsP1()
    if(player1.item == "wind"){
        p1_item.src = 'res/img/wind-main.png';
    }
    p1_wind_btn.classList.add('scale');
    p1_fire_btn.src = 'res/img/fire-selected.png';
    p1_water_btn.src = 'res/img/water-selected.png';
    p1_earth_btn.src = 'res/img/earth-selected.png';
    console.log(player1)
    itemsAreSelected()
}
function p1_getEarth(){
    player1.item = p1_earth.value;
    disableAllItemsP1()
    if(player1.item == "earth"){
        p1_item.src = 'res/img/earth-main.png';
    }
    p1_earth_btn.classList.add('scale');
    p1_fire_btn.src = 'res/img/fire-selected.png';
    p1_water_btn.src = 'res/img/water-selected.png';
    p1_wind_btn.src = 'res/img/wind-selected.png';
    console.log(player1)
    itemsAreSelected()
}
//Item Selection P2
p2_fire.addEventListener('click', p2_getFire);
p2_water.addEventListener('click', p2_getWater);
p2_wind.addEventListener('click', p2_getWind);
p2_earth.addEventListener('click', p2_getEarth);
function p2_getFire(){
    player2.item = p2_fire.value;
    player2.attack += 30 / 100 * player2.attack;
    disableAllItemsP2()
    if(player2.item == "fire"){
        p2_item.src = 'res/img/fire-main.png';
    }
    p2_fire_btn.classList.add('scale');
    p2_water_btn.src = 'res/img/water-selected.png';
    p2_wind_btn.src = 'res/img/wind-selected.png';
    p2_earth_btn.src = 'res/img/earth-selected.png';
    console.log(player2)
    itemsAreSelected()
}
function p2_getWater(){
    player2.item = p2_water.value;
    player2.healingPoints += 20 / 100 * player2.healingPoints;
    disableAllItemsP2()
    if(player2.item == "water"){
        p2_item.src = 'res/img/water-main.png';
    }
    p2_water_btn.classList.add('scale');
    p2_fire_btn.src = 'res/img/fire-selected.png';
    p2_wind_btn.src = 'res/img/wind-selected.png';
    p2_earth_btn.src = 'res/img/earth-selected.png';
    console.log(player2)
    itemsAreSelected()
}
function p2_getWind(){
    player2.item = p2_wind.value;
    player2.dodgeChance += 20 / 100 * player2.dodgeChance;
    disableAllItemsP2()
    if(player2.item == "wind"){
        p2_item.src = 'res/img/wind-main.png';
    }
    p2_wind_btn.classList.add('scale');
    p2_fire_btn.src = 'res/img/fire-selected.png';
    p2_water_btn.src = 'res/img/water-selected.png';
    p2_earth_btn.src = 'res/img/earth-selected.png';
    console.log(player2)
    itemsAreSelected()
}
function p2_getEarth(){
    player2.item = p2_earth.value;
    disableAllItemsP2()
    if(player2.item == "earth"){
        p2_item.src = 'res/img/earth-main.png';
    }
    p2_earth_btn.classList.add('scale');
    p2_fire_btn.src = 'res/img/fire-selected.png';
    p2_water_btn.src = 'res/img/water-selected.png';
    p2_wind_btn.src = 'res/img/wind-selected.png';
    console.log(player2)
    itemsAreSelected()
}
///Player 1 functions
function p1Attack(){
    p1_hit.style.cursor = 'not-allowed';
    p1_heal.style.cursor = 'not-allowed';
    p1_hit.disabled = true;
    p1_heal.disabled = true;
    let blockChance = Math.floor(Math.random()*10)+1;
    if(player2.item == 'earth' && blockChance <= 2){
        player1.attack = 0;
        chat.insertAdjacentHTML("afterbegin", `${player2.name} blocked your attack.`+"<br>");
    }
    let chance = Math.floor(Math.random()*10);
    if(player1.name == 'Naruto'){
    player1.attack = Math.floor(Math.random()*10)+11;
    console.log(player1.attack);
    }
    if(player1.name == 'Madara'){
        player1.attack = Math.floor(Math.random()*10)+16;
        console.log(player1.attack);
    }
    if(player1.name == 'Sasuke'){
        player1.attack = Math.floor(Math.random()*10)+12;
        console.log(player1.attack);
    }     
    if(player1.name == 'Itachi'){
        player1.attack = Math.floor(Math.random()*10)+11;
        console.log(player1.attack);
    }  
    if(chance > player2.dodgeChance){
        player2.health -= player1.attack;
        chat.insertAdjacentHTML("afterbegin", `${player2.name} took ${player1.attack} points of damage.`+"<br>");
    }else chat.insertAdjacentHTML("afterbegin", `${player2.name} has dodged your attack.`+"<br>");
    if(player2.health <= 0){
        alert(player1.name + " has won the battle")
        restartGame()
    }
    updateHealth()
    console.log(player2.health);
    console.log(blockChance)
    p2_hit.disabled = false;
    p2_heal.disabled = false;
    p2_hit.style.cursor = 's-resize';
    p2_heal.style.cursor = 'cell';

}
function p1Heal(){
    p1_hit.style.cursor = 'not-allowed';
    p1_heal.style.cursor = 'not-allowed';
    p1_hit.disabled = true;
    p1_heal.disabled = true;
    if(player1.name == 'Naruto'){
        player1.healingPoints = Math.floor(Math.random()*10)+6;
        console.log(player1.healingPoints);
    }
    if(player1.name == 'Madara'){
        player1.healingPoints = Math.floor(Math.random()*3)+4;
        console.log(player1.healingPoints);
    }
    if(player1.name == 'Sasuke'){
        player1.healingPoints = Math.floor(Math.random()*5)+3;
        console.log(player1.healingPoints);
    }     
    if(player1.name == 'Itachi'){
        player1.healingPoints = Math.floor(Math.random()*5)+4;
        console.log(player1.healingPoints);
    }  
    if(player1.health < player1.maxHealth){
        player1.health += player1.healingPoints;
        chat.insertAdjacentHTML("afterbegin", `${player1.name} healed for ${player1.healingPoints} points of health.`+"<br>");
    } else chat.insertAdjacentHTML("afterbegin", `${player1.name} has full health.`+"<br>");
    if(player1.health > player1.maxHealth){
    player1.health = player1.maxHealth;
    }
    updateHealth()
    console.log(player1.health);
    p2_hit.disabled = false;
    p2_heal.disabled = false;
    p2_hit.style.cursor = 's-resize';
    p2_heal.style.cursor = 'cell';
}
function p1Run(){
    alert(player1.name + " has given up!")
    chat.insertAdjacentHTML("afterbegin", `${player1.name} left the battlefield.`+"<br>");
    restartGame();
}
///Player 2 functions 
function p2Attack(){
    p2_hit.style.cursor = 'not-allowed';
    p2_heal.style.cursor = 'not-allowed';
    p2_hit.disabled = true;
    p2_heal.disabled = true;
    let blockChance = Math.floor(Math.random()*10)+1;
    if(player1.item == 'earth' && blockChance <= 2){
        player2.attack = 0;
        chat.insertAdjacentHTML("afterbegin", `${player1.name} blocked your attack.`+"<br>");
    }
    if(player2.name == 'Naruto'){
    player2.attack = Math.floor(Math.random()*10)+11;
    console.log(player2.attack);
    }
    if(player2.name == 'Madara'){
        player2.attack = Math.floor(Math.random()*10)+16;
        console.log(player2.attack);
    }
    if(player2.name == 'Sasuke'){
        player2.attack = Math.floor(Math.random()*10)+12;
        console.log(player2.attack);
    }     
    if(player2.name == 'Itachi'){
        player2.attack = Math.floor(Math.random()*10)+11;
        console.log(player2.attack);
    }  
    let chance = Math.floor(Math.random()*10);
    player2.attack = Math.floor(Math.random()*10)+11;
    console.log(player2.attack);
    if(chance > player1.dodgeChance){
        player1.health -= player2.attack;
        chat.insertAdjacentHTML("afterbegin", `${player1.name} took ${player2.attack} points of damage.`+"<br>");
    }else chat.insertAdjacentHTML("afterbegin", `${player1.name} has dodged your attack.`+"<br>");
    if(player1.health <= 0){
        alert(player2.name + " has won the battle")
        restartGame()
    }
    updateHealth()
    console.log(player2.health);
    p1_hit.disabled = false;
    p1_heal.disabled = false;
    p1_hit.style.cursor = 's-resize';
    p1_heal.style.cursor = 'cell';
}
function p2Heal(){
    p2_hit.style.cursor = 'not-allowed';
    p2_heal.style.cursor = 'not-allowed';
    p2_hit.disabled = true;
    p2_heal.disabled = true;
    player2.healingPoints = Math.floor(Math.random()*3)+4;
    if(player2.health < player2.maxHealth){
        player2.health += player2.healingPoints;
        chat.insertAdjacentHTML("afterbegin", `${player2.name} healed for ${player2.healingPoints} points of health.`+"<br>");
    } else chat.insertAdjacentHTML("afterbegin", `${player2.name} has full health.`+"<br>");
    if(player2.health > player2.maxHealth){
    player2.health = player2.maxHealth;
    }
    updateHealth()
    console.log(player1.health);
    p1_hit.disabled = false;
    p1_heal.disabled = false;
    p1_hit.style.cursor = 's-resize';
    p1_heal.style.cursor = 'cell';
}
function p2Run(){
    alert(player2.name + " has given up!")
    chat.insertAdjacentHTML("afterbegin", `${player2.name} left the battlefield.`+"<br>");
    restartGame();
}
/// Game manager functions
function playersReady(){
    setTimeout(function(){
        if(player1.name && player2.name != ''){
            selector.style.display = "none";
            item_selector.style.display = "block";
        }
    },2000)
}
function itemsAreSelected(){
    setTimeout(function(){
        if(player1.item && player2.item != undefined){
            item_selector.style.display = "none";
            loading.style.display = "block";
        }
    },2000)

        setTimeout(function(){
            loading.style.display = "none";
            arena.style.display = "block";
        },3000);
    }

function updateHealth() {
    document.getElementById("p1-health-bar").value = Math.floor( player1.health);
    document.getElementById("p1-health-bar").max = player1.maxHealth;
    document.getElementById("p2-health-bar").value = Math.floor( player2.health);
    document.getElementById("p2-health-bar").max = player2.maxHealth;
    document.getElementById("p1-healthText").innerHTML = `${player1.health}/${player1.maxHealth}`;
    document.getElementById("p2-healthText").innerHTML = `${player2.health}/${player2.maxHealth}`;
}
function restartGame(){
    player1.name = '';
    player2.name = '';
    p1_fire.disabled = false;
    p1_water.disabled = false;
    p1_wind.disabled = false;
    p1_earth.disabled = false;
    p2_fire.disabled = false;
    p2_water.disabled = false;
    p2_wind.disabled = false;
    p2_earth.disabled = false;
    p1_naruto.disabled = false;
    p1_madara.disabled = false;
    p1_sasuke.disabled = false;
    p1_itachi.disabled = false;
    p2_naruto.disabled = false;
    p2_madara.disabled = false;
    p2_sasuke.disabled = false;
    p2_itachi.disabled = false;
    arena.style.display = "none";
    selector.style.display = "block";
    chat.innerHTML = "";
}
function disableAllP1(){
    p1_naruto.disabled = true;
    p1_madara.disabled = true;
    p1_sasuke.disabled = true;
    p1_itachi.disabled = true;
}
function disableAllP2(){
    p2_naruto.disabled = true;
    p2_madara.disabled = true;
    p2_sasuke.disabled = true;
    p2_itachi.disabled = true;
}
function disableAllItemsP1(){
    p1_fire.disabled = true;
    p1_water.disabled = true;
    p1_wind.disabled = true;
    p1_earth.disabled = true;
}
function disableAllItemsP2(){
    p2_fire.disabled = true;
    p2_water.disabled = true;
    p2_wind.disabled = true;
    p2_earth.disabled = true;
}
///Object constructor
function Person(name, item, attack, health, maxHealth, healingPoints, dodgeChance) {
    this.name = name;
    this.item = item;
    this.attack = attack;
    // this.attackRating = attackRating;
    this.healingPoints = healingPoints;
    this.dodgeChance = dodgeChance;
    this.health = health;
    this.maxHealth = maxHealth;
}