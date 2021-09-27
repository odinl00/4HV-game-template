/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
var spelStatus = SPELEN;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler

/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function() {
    
};

/**
 * Updatet globale variabelen punten
 */
var updatePunten = function() {
    
};

/**
 * Updatet globale variabelen health
 */
var updateHealth = function() {
    
};


/**
 * Tekent spelscherm
 */
var tekenAlles = function() {
  // achtergrond

  // vijand

  // kogel

  // speler
  fill("white");
  rect(spelerX-25, spelerY-25, 50, 50);
  fill("black");
  ellipse(spelerX, spelerY, 10, 10);

  // punten en HP
};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function() {
    return false;
};

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}

/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegAlles();
      updatePunten();
      updateHealth();
      tekenAlles();
      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
}
