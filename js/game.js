// Game States
// "WIN" - Player robot has defeaated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var fightOrSkip = function() {
    // ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // conditional recursive function call 
    if (prompt.Fight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    promptFight = promptFight.toLowerCase();
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerInfo.playerMoney = playerInfo.money - 10;
            //stop while loop using break; and enter next fight
            
            // return true if player wants to leave
            return true;
        }
    }
    return false;
};

var fight = function(enemy) {
    //repeat and execute as long as the enemy-robot is alive

    //keep track of who goes first
    var isPlayerTurn = true;

    //randomly change turn order
    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }
    
    while (playerInfo.health > 0 && enemy.health > 0) {
        if (isPlayerTurn) {
        // ask player if they want to fight or skip 
        if (fightOrSkip()) {
            // if true leave fight by breaking loop
            break;
        } 

        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    



    //if yes(true), leave fight
    if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney);
        break;
     }
    }

    // generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerAttack);

    enemyHealth = Math.max(0, enemy.Health - damage);
    console.log(
      playerInfo.name + " attacked " + enemyNames + " . " + enemyNames + " now has " + enemyHealth + " health remaining. "  
    );

    // check enemy's health
    if (enemy.Health <= 0) {
        window.alert(enemy.Name + " has died!");

    // award player money for winning
    playerInfo.money = playerInfo.money + 20;
    // leave while() loop since enemy is dead
    break;
    
} else {
    window.alert(enemy.Name + " still has " + enemy.Health + " health left. ");
}

//remove player's health by subtracting the amount set in the enemyAttack variable
var damage = randomNumber(enemy.Attack - 3, enemy.Attack);

playerHealth = Math.max(0,playerInfo.health - damage);
console.log(
    enemyName + " attacked " + playerInfo.name + " . " + playerInfo.name + " now has " + playerHealth + " health remaining."
);

//check player's health
if (playerHealth <= 0) {
    window.alert(playerInfo.name + " has died!");
    break;
} else {
    window.alert(playerInfo.name + " still has " + playerHealth + " health left.");
    } 
  }
};

//function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

        return value;
    }

    //function to set name
    var getPlayerName = function () {
        while (name ==="" || name === null) {
            name = prompt("What is your robot's name?");
        }
    }

    var playerInfo = {
        name: window.prompt("What is your robot's name?"),
        health: 100,
        attack: 10,
        money: 10,
        reset: function() {
            name: getPlayerName(),
            this.health = 100;
            this.money = 10;
            this.attack = 10;
        }, 
        refillHealth: function() {
            if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
            }
            else {
            window.alert("You don't have enough money!");
            }
        },
        upgradeAttack: function() {
            if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
}
    
    var enemyInfo = [
        {
        name: "Roborto",
        attack: randomNumber(10, 14)
        },
        {
        name: "Amy Android",
        attack: randomNumber(10, 14)
        },
        {
        name: "Robo Trumble",
        attack: randomNumber(10,14)
        }
    ];

// function to start a new game
var startGame= function() {
    // reset player stats
    playerInfo.reset();
    
    for(var i = 0; i < enemyInfo.length; i++) {
// if player is still alive keep fighting
        if (playerInfo.health > 0) {
    // let player know what round thet are in,
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

    //pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyObj = enemyInfo[i];

    //reset enemyHealth before starting new fight
    pickedEnemyObj.health = randomNumber(40, 60);

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyObj);

    // if player is still alive and we're not at the last enemy in the array
    if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        
        // if yes, take them to the store() function
        if (storeConfirm) {
            shop();
        }    
    }
}
// if player isn't alive stop the game
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    // play again
    endGame();
};

// function to end the entire game
var endGame = function () {
    window.alert("The game has now ended. Let's see how you did!");

    // if player is still alive, player wins!
    if (playerInfo.Health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }

// ask the player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
    //restart the game
    startGame();
} 
else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
};

// go to shop between battle functions
var shop = function() {
    //ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE. "
    );

// convert answer to a number
shopOptionPrompt = parseInt(shopOptionPrompt);

// use switch to carry out action
switch (shopOptionPrompt) {
    case 1:
        playerInfo.refillHealth();
        break;
    case 2:
        playerInfo.upgradeAttack();
        break;
    case 3:
        window.alert("Leaving the store.");
        break;
    default:
        window.alert("You did not pick a valid option. Try again.");
        // call shop() again to force player to pick a valid option
        shop();
        break;
    }
};
        // do nothing , so function will end
        
// start the game when the page loads
startGame();