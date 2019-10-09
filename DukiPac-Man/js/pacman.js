// En esta funcion le asignamos los movimientos

function moveDown() {
  pacman.direction = 'down';
  if (gameData[pacman.y+1][pacman.x] !== BLOCK) {
    gameData[pacman.y][pacman.x] = GROUND;
    pacman.y = pacman.y + 1 ;
    gameData[pacman.y][pacman.x] = PACMAN;
  }
}

function moveUp() {
  pacman.direction = 'up';
  if (gameData[pacman.y-1][pacman.x] !== BLOCK) {
    gameData[pacman.y][pacman.x] = GROUND;
    pacman.y = pacman.y - 1;
    gameData[pacman.y][pacman.x] = PACMAN;
  }
}

function moveLeft() {
  pacman.direction = 'left';
  if (gameData[pacman.y][pacman.x-1] !== BLOCK) {
    gameData[pacman.y][pacman.x] = GROUND;
    pacman.x = pacman.x - 1 ;
    gameData[pacman.y][pacman.x] = PACMAN;
  }
}

function moveRight() {
  pacman.direction = 'right';
  if (gameData[pacman.y][pacman.x+1] !== BLOCK) {
    gameData[pacman.y][pacman.x] = GROUND;
    pacman.x = pacman.x + 1 ;
    gameData[pacman.y][pacman.x] = PACMAN;
  }
}

// En esta funcion le asignamos la tecla dependiento el movimiento
function setupKeyboardControls() {
  document.addEventListener('keydown', function (e) {
    if (e.keyCode === 37) {         
      moveLeft();
    } else if (e.keyCode === 38) {  
      moveUp();

    } else if (e.keyCode === 39){   
      moveRight();

    } else if (e.keyCode === 40){   
      moveDown();
    
    } else if (e.keyCode === 87) {  
      moveUp();

    }if (e.keyCode === 65) {         
      moveLeft();

    } else if (e.keyCode === 68){   
      moveRight();

    } else if (e.keyCode === 83){   
      moveDown();
    }
    eraseMap();
    drawMap();
  });
}

function eraseMap() {
  document.body.removeChild(map);
}

function main() {
  drawMap();
  setupKeyboardControls();
}

main();