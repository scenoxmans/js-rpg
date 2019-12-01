
function Person(health, maxHealth, defaultAttack, healing, speacialAttack, block){
    this.health = health;
    this.maxHealth = maxHealth;
    this.defaultAttack = defaultAttack;
    this.healing = healing;
    this.block = block;
    this.specialAttack = speacialAttack;

    this.attack = function(){};
    this.heal = function(){};
    this.blockAttack = function(){}
    this.speacialAttack = function(){}
}

