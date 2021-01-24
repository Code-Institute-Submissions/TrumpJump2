var trump = document.getElementById("trump"); 
var barrier = document.getElementById("barrier");
var score = 0;
var scandalBoxString = "";
var scandalDate = "";
let loseString = "";
var scandalBoxString = "";
var maxscore = 19;

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
]

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
]

if(window.innerHeight > window.innerWidth){
    alert("Rotate your perfect phone")

    }

    alert("testing")