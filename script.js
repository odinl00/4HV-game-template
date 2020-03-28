/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library
   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* globale variabelen die je gebruikt in je game
 */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 200; // x-positie van speler
var spelerY = 100; // y-positie van speler

var score = 0; // aantal behaalde punten

/* functies die je gebruikt in je game
 */

var tekenVeld = function () {
  // teken het veld
  fill("green");
  rect(20, 20, width - 2 * 20, height - 2 * 20);
}

var tekenVijand = function() {
  // teken vijand of tegenspeler
};

var tekenKogel = function() {
  // teken kogel of bal
};

var tekenSpeler = function(x, y) {
  // teken speler
  fill("white");
  ellipse(x, y, 50, 50);
};

var beweegVijand = function() {
  // update globale variabelen met positie van vijand of tegenspeler
};

var beweegKogel = function() {
  // update globale variabelen met positie van kogel of bal
};

var beweegSpeler = function() {
  // kijk wat de toetsen/muis etc zijn
  // update globale variabele spelerX en spelerY
};

var checkVijandGeraakt = function() {
  // zoek uit of vijand is geraakt
  return false;
};

var checkSpelerGeraakt = function() {
  // zoek uit of speler is geraakt
  // bijvoorbeeld door botsing met vijand
  return false;
};

var checkGameOver = function() {
  // zoek uit of spel is afgelopen
  return false;
};

/* setup
   de code in deze functie wordt één keer uitgevoerd door de p5 library, 
   zodra het spel geladen is in de browser
   */
function setup() {
  createCanvas(1280, 720); // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  background('blue'); // Kleur de achtergrond blauw, zodat je het kunt zien
}

/* draw
   de code in deze functie wordt meerdere keren per seconde uitgevoerd door de p5 library, 
   nadat de setup functie klaar is
   */
function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegVijand();
      beweegKogel();
      beweegSpeler();
      
      if (checkVijandGeraakt()) {
        // punten erbij
        // nieuwe vijand maken
      }
      
      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }

      tekenVeld();
      tekenVijand();
      tekenKogel();
      tekenSpeler(spelerX, spelerY);

      if (checkGameOver()) {
        SPELSTATUS = GAMEOVER;
      }
      break;
  }
}
