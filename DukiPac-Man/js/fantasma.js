/

/function para el movimiento del fantasma rojo
function GRmoveDown() {
  red.direction = 'down';
  if (gameData[red.y+1][red.x] !== BLOCK) {
    gameData[red.y][red.x] = GROUND;
    red.y = red.y + 1 ;
    gameData[red.y][red.x] = RED;
  }
}

function GRmoveUp() {
  red.direction = 'up';
  if (gameData[red.y-1][red.x] !== BLOCK) {
    gameData[red.y][red.x] = GROUND;
    red.y = red.y - 1;
    gameData[red.y][red.x] = RED;
  }
}

function GRmoveLeft() {
  red.direction = 'left';
  if (gameData[red.y][red.x-1] !== BLOCK) {
    gameData[red.y][red.x] = GROUND;
    red.x = red.x - 1 ;
    gameData[red.y][red.x] = RED;
  }
}

function GRmoveRight() {
  red.direction = 'right';
  if (gameData[red.y][red.x+1] !== BLOCK) {
    gameData[red.y][red.x] = GROUND;
    red.x = red.x + 1 ;
    gameData[red.y][red.x] = RED;
  }
}

function GRmoveDown() {
  red.direction = 'down';
  if (gameData[red.y+1][red.x] !== BLOCK) {
    gameData[red.y][red.x] = GROUND;
    red.y = red.y + 1 ;
    gameData[red.y][red.x] = RED;
  }
}

/function para el movimiento fantasma azul
function GBmoveUp() {
  blue.direction = 'up';
  if (gameData[blue.y-1][blue.x] !== BLOCK) {
    gameData[blue.y][blue.x] = GROUND;
    blue.y = blue.y - 1;
    gameData[blue.y][blue.x] = BLUE;
  }
}

function GBmoveLeft() {
  blue.direction = 'left';
  if (gameData[blue.y][blue.x-1] !== BLOCK) {
    gameData[blue.y][blue.x] = GROUND;
    blue.x = blue.x - 1 ;
    gameData[blue.y][blue.x] = BLUE;
  }
}

function GBmoveRight() {
  blue.direction = 'right';
  if (gameData[blue.y][blue.x+1] !== BLOCK) {
    gameData[blue.y][blue.x] = GROUND;
    blue.x = blue.x + 1 ;
    gameData[blue.y][blue.x] = BLUE;
  }
}

function GBmoveDown() {
  blue.direction = 'down';
  if (gameData[blue.y+1][blue.x] !== BLOCK) {
    gameData[blue.y][blue.x] = GROUND;
    blue.y = blue.y + 1 ;
    gameData[blue.y][blue.x] = BLUE;
  }
}

/function para el movimiento fantasma Naranja

function GOmoveUp() {
  orange.direction = 'up';
  if (gameData[orange.y-1][orange.x] !== BLOCK) {
    gameData[orange.y][orange.x] = GROUND;
    orange.y = orange.y - 1;
    gameData[orange.y][orange.x] = ORANGE;
  }
}

function GOmoveLeft() {
  orange.direction = 'left';
  if (gameData[orange.y][orange.x-1] !== BLOCK) {
    gameData[orange.y][orange.x] = GROUND;
    orange.x = orange.x - 1 ;
    gameData[orange.y][orange.x] = ORANGE;
  }
}

function GOmoveRight() {
  orange.direction = 'right';
  if (gameData[orange.y][orange.x+1] !== BLOCK) {
    gameData[orange.y][orange.x] = GROUND;
    orange.x = orange.x + 1 ;
    gameData[orange.y][orange.x] = ORANGE;
  }
}

function GOmoveDown() {
  orange.direction = 'down';
  if (gameData[orange.y+1][orange.x] !== BLOCK) {
    gameData[orange.y][orange.x] = GROUND;
    orange.y = orange.y + 1 ;
    gameData[orange.y][orange.x] = ORANGE;
  }
}

/function para el movimiento fantasma Rosado
function GPmoveUp() {
  pink.direction = 'up';
  if (gameData[pink.y-1][pink.x] !== BLOCK) {
    gameData[pink.y][pink.x] = GROUND;
    pink.y = pink.y - 1;
    gameData[pink.y][pink.x] = PINK;
  }
}

function GPmoveLeft() {
  pink.direction = 'left';
  if (gameData[pink.y][pink.x-1] !== BLOCK) {
    gameData[pink.y][pink.x] = GROUND;
    pink.x = pink.x - 1 ;
    gameData[pink.y][pink.x] = PINK;
  }
}

function GPmoveRight() {
  pink.direction = 'right';
  if (gameData[pink.y][pink.x+1] !== BLOCK) {
    gameData[pink.y][pink.x] = GROUND;
    pink.x = pink.x + 1 ;
    gameData[pink.y][pink.x] = PINK;
  }
}

function GPmoveDown() {
  pink.direction = 'down';
  if (gameData[pink.y+1][pink.x] !== BLOCK) {
    gameData[pink.y][pink.x] = GROUND;
    pink.y = pink.y + 1 ;
    gameData[pink.y][pink.x] = PINK;
  }
}


function eraseMap() {
  document.body.removeChild(map);
}

function main() {
  drawMap();
  setupKeyboardControls();
}

main();