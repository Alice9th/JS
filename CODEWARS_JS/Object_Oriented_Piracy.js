//Ahoy matey!

//You are a leader of a small pirate crew. And you have a plan. 
//With the help of OOP you wish to make a pretty efficient system 
//to identify ships with a heavy booty on board.

//Unfortunattely for you, people weigh a lot this days, 
//so how do you know if a ship if full of gold and not people?

//You begin with writing a generic Ship class.

//Every time your spies see a new ship enter the dock, they will create a 
//new ship object based on their observations:

//1. draft - an estimate of the ship's weight based on how low it is 
//in the water
//2. crew - the count of crew on board

//Taking into account that an average crew member on board adds 
//1.5 units to the draft, a ship that has a draft of more than 20 
//without crew is considered worthy to loot. Any ship weighing that 
//much must have a lot of booty!

//Add the method

//isWorthIt


function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = function() {
      return this.draft - this.crew*1.5 >= 20;
    }
}

//Here we create a function inside our function, so we can use "this"
//(The JavaScript this keyword refers to the object it belongs to.)
//Creating a new function derived from the main one and applying
//an operation to get the weight and compare it with what we want (loot)