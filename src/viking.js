// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    // console.log(this.health);
    this.health = this.health - damage;
    //  console.log(this.health);
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(name, health, strength);
    this.name = name;
    (this.health = health), (this.strength = strength);
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

const vikingOne = new Viking("Ragnar", 1000, 250);
const vikingTwo = new Viking("Bjorn", 500, 120);
const vikingThree = new Viking("Ivar", 200, 50);
const vikingFour = new Viking("Harrald", 900, 170);
const vikingArr = [vikingOne, vikingTwo, vikingThree, vikingFour];

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

const saxonOne = new Saxon(800, 100);
const saxonTwo = new Saxon(300, 70);
const saxonThree = new Saxon(300, 90);
const saxonFour = new Saxon(300, 70);
const saxonArr = [saxonOne, saxonTwo, saxonThree, saxonFour];

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    // console.log(this.saxonArmy);
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
    // console.log(this.vikingArmy);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
    // console.log(this.saxonArmy);
  }

  vikingAttack() {
    // console.log(this.saxonArmy);
    // console.log(this.vikingArmy[0].health);

    const finalAttack = (this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ].health -=
      this.vikingArmy[
        Math.floor(Math.random() * this.vikingArmy.length)
      ].strength);
    // console.log(this.saxonArmy.health);

    if (
      this.saxonArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        .health <= 0
    ) {
      this.saxonArmy[this.health];
    }
    // super.receiveDamage(damage)
  }
}

const itsWar = new War();
for (let i = 0; i < vikingArr.length; i++) {
  itsWar.addViking(vikingArr[i]);
}
for (let i = 0; i < saxonArr.length; i++) {
  itsWar.addSaxon(saxonArr[i]);
}

// itsWar.vikingAttack();
// itsWar.vikingAttack();
// itsWar.vikingAttack();
// itsWar.vikingAttack();

// console.log(saxonArr);