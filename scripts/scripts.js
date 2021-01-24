
var score = 0;
var scandalBoxString = "";
var scandalDate = "";
let loseString = "";
var scandalBoxString = "";
var maxScore = 18;

//array to iterate through for each barrier
let scandals = [
    '"Mexicans = criminals"',
    'Muslim ban',
    'Jeb Bush',
    'Ted Cruz',
    'Access Hollywood tape',
    'Presidential debates',
    'Election 2016',
    'Alternative facts', 
    'Scaramucci', 
    '"little rocket man"', 
    'Stormy Daniels', 
    'Kids in cages', 
    'Brett Kavanaugh', 
    'Ukraine phone call', 
    'Buying Greenland', 
    'Weather map Sharpie', 
    'Impeachment #1', 
    'COVID-19 Response', 
    'Amy Coney Barrett'
];

// array to iterate through for the date over the game and also to show how far you got if you hit the barrier 
let scandalDates = [
    "June 2015",
    "December 2015",
    "February 2016",
    "May 2016",
    "October 2016",
    "October 2016",
    "November 2016",
    "January 2017",
    "July 2017",
    "September 2017",
    "January 2018",
    "June 2018",
    "September 2018",
    "July 2019",
    "August 2019",
    "September 2019",
    "December 2019",
    "2020",
    "October 2020",
];

if(window.innerHeight > window.innerWidth){
    alert("Rotate your perfect phone");

    }

function ShowIntro(){
    document.getElementById("MainGameDiv").innerHTML = document.getElementById("IntroScreenDiv").innerHTML;
    document.getElementById("MainGameDiv").style.setProperty.style ="height: 50px";
}

function StartGame(){
        score = 0; //reset the score to zero when a new game is started
        scandalDate = scandalDates[score];
        scandalText = scandals[score];
        document.getElementById("ProgressDate").innerHTML = scandalDate;
        document.getElementById("MainGameDiv").innerHTML = document.getElementById("GameBoard").innerHTML;
        document.getElementById("ScandalText").innerText = scandalText;
        document.getElementById('tweetscandal').className = 'startMoving';

        CollisionDet = setInterval(CollisionDetection, 100);
        MyGameLoop = setInterval(GameLoop, 2000);




}

function GameLoop(){
    if (score <= maxScore){
    console.log(score);
    scandalDate = scandalDates[score];
    scandalText = scandals[score];
    document.getElementById("ProgressDate").innerHTML = scandalDate;
    document.getElementById("MainGameDiv").innerHTML = document.getElementById("GameBoard").innerHTML;
    document.getElementById("ScandalText").innerText = scandalText;
    document.getElementById("ScandalGameOver").innerText = scandalText;
    document.getElementById('tweetscandal').className = 'startMoving';
    }else{
    console.log("Time to end this")
    clearInterval(CollisionDet);
    clearInterval(MyGameLoop);
    document.getElementById("ProgressDate").innerHTML = "November 2020";
    document.getElementById("tweetscandal").style.display = "none";
    document.getElementById('tweetscandal').className = '';
    document.getElementById("GameJumpButtonDiv").style.display = "none";
    BossFight();



    }
    score = score +1;
}

function CollisionDetection(){
    var trumpImageDiv = document.getElementById("JumpingTrump"); 
    var tweetscandal = document.getElementById("tweetscandal"); 
    let trumpTop = parseInt(window.getComputedStyle(trumpImageDiv).getPropertyValue("top")); //evaluate top position of Trump and parse as integer to remove 'px' from result
    let barrierLeft = parseInt(window.getComputedStyle(tweetscandal).getPropertyValue("left")); //evaluate left position of Barrier and parse as integer to remove 'px' from result
    if(barrierLeft>=-850 && barrierLeft<=-800 && trumpTop==70){ //only true if Trump and Barrier are touching
        console.log("Boom!------------------------------->");
        clearInterval(CollisionDet);
        clearInterval(MyGameLoop);
        YouDied()
        score = 100;

    }
    console.log("TrumpTop " + trumpTop);
    console.log("Barrier Left " + barrierLeft);

}

function YouDied(){
    document.getElementById("MainGameDiv").innerHTML = document.getElementById("GameOverFail").innerHTML;
    document.getElementById("tweetscandal").style.display = "none";
    document.getElementById('tweetscandal').className = '';
    document.getElementById("GameJumpButtonDiv").style.display = "none";
}

function BossFight(){
    document.getElementById("MainGameDiv").innerHTML = document.getElementById("FinalBoss").innerHTML;

    document.getElementById("GameJumpButtonDiv").style.display = "none";
}

function TrumpJump(){
    document.getElementById('JumpingTrump').className = 'animate';

    setTimeout(function(){
        document.getElementById('JumpingTrump').className = '';
    },900); // after 900ms (time for jump animaation to complete), remove class
}
