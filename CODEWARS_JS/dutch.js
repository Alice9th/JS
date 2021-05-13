//Mr. despair wants to jump off Dutch act, So he came to the top of a building.
//Scientific research shows that a man jumped from the top of the roof, 
//when the floor more than 6, the person will often die in an instant; 
//When the floor is less than or equal to 6, the person will not immediately die,
//he would scream. (without proof)

//Input: floor, The height of the building (floor)

//Output: a string, The voice of despair(When jumping Dutch act)

//Example:
//sc(2) should return "Aa~ Pa! Aa!"

function sc(floor){
    if(floor <= 1) {
      return '';
    } else if(floor <= 6) {
        return 'Aa~ '.repeat(floor - 1) + 'Pa! ' + 'Aa!';
      } else {
          return 'Aa~ '.repeat(floor - 1) + 'Pa!';
       }
};

//For the first part, is the floor is <= 1, Mr. Despair is safe
//We use conditionals to get the other scenarios
//The screaming is only for floors that are <=6 and is going to be
// floor - 1 (that's why from the second floor we have "Aa~ Pa! Aa!")
//With this same condition we have that Mr. Despair hits the floor
//without dying (a little grim if you ask me), so we add a 'Pa!'
//Since these are the 2 scenerios that we want to determine, the rest
//wouold be the same but without the screaming, since Mr. Despair
//will die and not scream if he jumps from floors higher than 7

//To get the number of 'Aa~' that we want, we use the repite() method
//"The repeat() method constructs and returns a new string which contains 
//the specified number of copies of the string on which it was called, 
//concatenated together."