// constructor function which can take in a series of values and create objects
// with the properties contained inside

// ☝️ Why don't we just declare the methods in the constructor?

// 🙋 When we bind a function using the this keyword, the method only exists on that instance of the object. For any method bound to this, it will be redeclared with each new instance of an object.


// ☝️ How does the prototype help us solve this problem?

// 🙋 The prototype allows us to declare methods that will be attached to all instances of an object of that prototype. Because the method is applied to the prototype, it is only stored in memory once for all instances.

function Character(name, profession, gender, age, strength, hitpoints) {
  this.name = name;
  this.profession = profession;
  this.gender = gender;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;
}
  // method which prints all of the stats for a character
Character.prototype.printStats = function() {
	console.log("Name: " + this.name + "\nProfession: " + this.profession +
	"\nGender: " + this.gender + "\nAge: " + this.age + "\nStrength: " +
	this.strength + "\nHitPoints: " + this.hitpoints);
	console.log("\n-------------\n");
};

// method which determines whether or not a character's "hitpoints" are less than zero
// and returns true or false depending upon the outcome
Character.prototype.isAlive = function() {
	if (this.hitpoints > 0) {
		console.log(this.name + " is still alive!");
		console.log("\n-------------\n");
		return true;
	}
	console.log(this.name + " has died!");
	return false;
};

// method which takes in a second object and decreases their "hitpoints" by this character's strength
Character.prototype.attack = function(character2) {
	character2.hitpoints -= this.strength;
};

// method which increases this character's stats when called
Character.prototype.levelUp = function() {
	this.age += 1;
	this.strength += 5;
	this.hitpoints += 25;
};


// creates two unique characters using the "character" constructor
var warrior = new Character("Crusher", "Warrior", "Male", 25, 10, 75);
var rogue = new Character("Dodger", "Rogue", "Female", 23, 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);
warrior.printStats();
warrior.isAlive();

rogue.levelUp();
rogue.printStats();

console.log("----------rogue Character------------");

console.log(rogue);

console.log("----------Character.prototype------------");

console.log(Character.prototype);


