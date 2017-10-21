/**

The objective of the game is to collect as many coins as you can. Move with the arrow keys. To get a high score remix this project for proof of high score and I'll add you to the list if you got enough points!

Also... This Is Like My 1st Complete Game So I Hope You Enjoy!

TIPS:
1) The speed of the coins changes every time, so keep a look out!
2) Different Coins Are Worth More
3) There's A Sneaky Coin That Removes Points And Time!
**/

// v1.0 - Basic Game play with Highscores and 1 type of coin
// v1.1 - Added The Blue And Red Coins
// v1.2 - Now Has The Evil Black Coin
// v1.3 - The Hack Is Now Here

// My TODO List [42% Done] [√ = Done] [X = Not Done] [? = Half Works]
// TODO: Make A Coin That Removes Points [√]
// TODO: Add A Title Screen [X]
// TODO: Use An Array For Coins [X]
// TODO: Add More Charecters And A Shop [X]
// TODO: Make A Secret Hack [√]
// TODO: Fix The Extra Points Glicth [?]





// [WARNING! VERY MESSY CODE BELOW]

var use = true;
var x = 50;
var textX = 298;
var y = 300;
var place = 100;
var area = 1;
var earnPoints = false;
var score = 0;
var coinYellowX = 400;
var coinYellowY = random(75, 300);
var speedYellow = random(5, 7.5);
var coinRedX = 400;
var coinRedY = random(75, 300);
var speedRed = random(7.5, 12);
var coinBlueX = 400;
var coinBlueY = random(75, 300);
var speedBlue = random(12, 17.5);
var coinBlackX = 400;
var coinBlackY = random(75, 300);
var speedBlack = random(8, 12.5);
var showCoinYellow = true;
var showCoinRed = true;
var showCoinBlue = true;
var showCoinBlack = true;
var coins = 0;
var check = false;
var time = 33;
var sun = function() {
    strokeWeight(10);
    stroke(238, 255, 0);
    fill(238, 255, 0);
    ellipse(150, 75, 100, 100);
};
var hero = function() {
    fill(255, 0, 0);
    noStroke();
    arc(x, y, 75, 75, 0, 330);
    fill(255, 255, 255);
    ellipse(x, y - 20, 20, 20);
    fill(0, 0, 0);
    ellipse(x + 5, y - 20, 10, 10);
};
var scene = function() {
    background(0, 153, 255);
    fill(21, 107, 0);
    rect(0, 310, 400, 100);
    sun();
};
var moveCoin = function() {
    fill(247, 255, 0);
    if (coinYellowX > 0) {
        coinYellowX -= speedYellow;
        if (showCoinYellow === true) {
            fill(255, 162, 0);
            ellipse(coinYellowX, coinYellowY, 50, 50);
            
            fill(133, 120, 34);
            textSize(45);
            text("$", coinYellowX - 15, coinYellowY + 15);
        }
        if (coinYellowX <= 1) {
            showCoinYellow = true;
        }
    } else {
        coinYellowX = 400;
        coinYellowY = random(75, 300);
        speedYellow = random(5, 15);
    }
    
    fill(255, 0, 51);
    if (coinRedX > 0) {
        coinRedX -= speedRed;
        if (showCoinRed === true) {
            fill(212, 17, 17);
            ellipse(coinRedX, coinRedY, 50, 50);
            
            fill(74, 14, 14);
            textSize(45);
            text("$", coinRedX - 15, coinRedY + 15);
        }
        if (coinRedX <= 1) {
            showCoinRed = true;
        }
    } else {
        coinRedX = 400;
        coinRedY = random(75, 300);
        speedRed = random(10, 20);
    }
    
    if (coinBlueX > 0) {
        coinBlueX -= speedBlue;
        if (showCoinBlue === true) {
            fill(19, 212, 206);
            ellipse(coinBlueX, coinBlueY, 50, 50);
            
            fill(2, 50, 161);
            textSize(45);
            text("$", coinBlueX - 15, coinBlueY + 15);
        }
        if (coinBlueX <= 1) {
            showCoinBlue = true;
        }
    } else {
        coinBlueX = 400;
        coinBlueY = random(75, 300);
        speedBlue = random(20, 30);
    }
    
    if (coinBlackX > 0) {
        coinBlackX -= speedBlack;
        if (showCoinBlack === true) {
            fill(0, 0, 0);
            ellipse(coinBlackX, coinBlackY, 50, 50);
            
            fill(82, 82, 82);
            textSize(30);
            text("X", coinBlackX - 10, coinBlackY + 12);
        }
        if (coinBlackX <= 1) {
            showCoinBlack = true;
        }
    } else {
        coinBlackX = 400;
        coinBlackY = random(75, 300);
        speedBlack = random(5, 10);
    }
};
var keepScore = function() {
    fill(0, 0, 0);
    textSize(20);
    text("SCORE: " + score, place, 80);
};
var keepTime = function() {
    if (time > 0.9) {
        time -= 0.01;
    } else {
        if (check === false) {
            area = 2;
        } else {
            area = 3;
        }
    }
    fill(26, 0, 255);
    rect(295, 50, 120, 30);
    textSize(25);
    fill(0, 0, 0);
    text("TIME: " + time, textX, 75);
    if (time < 10) {
        textX = 312;
    }
};
mouseClicked = function() {
    if (area === 2 && mouseX > 100 && mouseX < 300 && mouseY > 250 && mouseY < 300) {
        area = 3;
        check = true;
        place += 100;
    }
    if (area === 3 && mouseX > 285 && mouseX < 385) {
        area = 2;
    }
};
draw = function() {
    if (area === 2) {
        background(0, 0, 0);
        fill(255, 0, 0);
        textSize(50);
        text("TIMES UP", 100, 100);
        textSize(25);
        text("FINAL SCORE: " + score, 110, 200);
        fill(0, 238, 255);
        rect(100, 250, 200, 50);
        fill(0, 0, 0);
        text("HIGH SCORES", 110, 285);
    } else {
        if (area === 3) {
            background(0, 0, 0);
            fill(166, 255, 0);
            text("HIGHSCORES:\n\n1. None Yet - 0\n2. - 0\n3. - 0\n4. - 0\n5. - 0\n6. - 0\n7. - 0\n8. - 0\n9. - 0\n10. - 0\n----------------------", 100, 25);
            fill(255, 0, 0);
            rect(285, 325, 100, 50);
            fill(255, 255, 255);
            textSize(35);
            text('BACK', 285, 365);
        } else {
            scene();
            hero();
            if (time > 0) {
                moveCoin();
            }
        }
        keepScore();
        keepTime();
    }
    if (keyIsPressed && keyCode === UP && y > 75) {
        y -= 8;
    }
    if (keyIsPressed && keyCode === RIGHT && x < 400) {
        x += 5;
    }
    if (keyIsPressed && keyCode === LEFT && x > 35) {
        x -= 5;
    }
    if (keyIsPressed && keyCode === DOWN && use === true) {
        time+=15;
        use = false;
    }else if(keyIsPressed && keyCode === DOWN && use === false){
        time-=0.1;
    }
    if (y < 300) {
        y += 5;
    }
    if (dist(x, y, coinYellowX, coinYellowY) <= (50 + 75) / 2) {
        if (earnPoints === false) {
            earnPoints = true;
            showCoinYellow = false;
            score++;
            playSound(getSound("rpg/coin-jingle"));
        }
    } else {
        earnPoints = false;
    }
    
    if (dist(x, y, coinRedX, coinRedY) <= (50 + 75) / 2) {
        if (earnPoints === false) {
            earnPoints = true;
            showCoinRed = false;
            score+=3;
            playSound(getSound("rpg/coin-jingle"));
        }
    } else {
        earnPoints = false;
    }
    
    if (dist(x, y, coinBlueX, coinBlueY) <= (50 + 75) / 2) {
        if (earnPoints === false) {
            earnPoints = true;
            showCoinBlue = false;
            score+=5;
            playSound(getSound("rpg/coin-jingle"));
        }
    } else {
        earnPoints = false;
    }
    
    if (dist(x, y, coinBlackX, coinBlackY) <= (50 + 75) / 2) {
        if (earnPoints === false) {
            earnPoints = true;
            showCoinBlack = false;
            score-=2;
            time-=0.15;
            playSound(getSound("rpg/coin-jingle"));
        }
    } else {
        earnPoints = false;
    }
};
