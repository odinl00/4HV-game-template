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

/* functies die je gebruikt in je game
 */

var tekenVeld = function () {
  // teken het veld
  fill("green");
  rect(20, 20, width - 2 * 20, height - 2 * 20);
}

var tekenVijand = function() {
  // teken de vijand
};

var tekenSpeler = function(x, y) {
  // teken de speler
  fill("white");
  ellipse(x, y, 50, 50);
};

var verplaatsVijand = function() {
  // update globale variabelen met positie van vijand
};

var verplaatsSpeler = function() {
  // kijk wat de toetsen/muis etc zijn
  // update globale variabele spelerX en spelerY aan
};

var checkBotsing = function() {
  // zoek uit of er een botsing is
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
      verplaatsVijand();
      verplaatsSpeler();
  
      tekenVeld();
      tekenVijand();
      tekenSpeler(spelerX, spelerY);

      if (checkBotsing()) {
        SPELSTATUS = GAMEOVER;
      }
      break;
  }
}
