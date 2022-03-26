var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney= 10;

var enemyNames= ["Roborto", "Amy Android", "Robo Trumble"];

var enemyHealth= 50;
var enemyAttack = 12;

console.log(enemyNames[i]);
console.log(i);
console.log(enemyNames[i] + " is at " + i + " index ");

// You can also log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth);

// Game States
// "WIN" - Player robot has defeaated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less








var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive
    while(playerHealth >0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to Fight or Skip this battle? Enter 'FIGHT' OR 'SKIP' to choose.");

    //if player choses to skip 
    if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes(true), leave fight
    if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
     }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyNames + " . " + enemyNames + " now has " + enemyHealth + " health remaining. "  
    );

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");

    // award player money for winning
    playerMoney = playerMoney + 20;
    // leave while() loop since enemy is dead
    break;
    
} else {
    window.alert(enemyName + " still has " + enemyHealth + " health left. ");
}

//remove player's health by subtracting the amount set in the enemyAttack variable
playerHealth = playerHealth - enemyAttack;
console.log(
    enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining."
);

//check player's health

if (playerHealth > 0) {
    // let player know what round thet are in,
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

    //pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    //reset enemyHealth before starting new fight
    enemyHealth = 50;

    //use debugger to pause script from running and check what's going at the moment in the code
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
}

else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
}









if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
    break;
} else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
} 





  } // end of while loop
}; // end of fight function


// CALLING FUNCTION??????
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);

    // call fight function wiht enemy-robot
    fight(enemyNames[i]);
     
    }
    //fight function statements

for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);


}   

