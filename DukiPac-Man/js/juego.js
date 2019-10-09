// Funcion para la creación del mapa
function createTiles(data) {

  
  let tilesArray = [];

  
  for (let row of data) {

    
    for (let col of row) {

     
      let tile = document.createElement('div');

    
      tile.classList.add('tile');

      
      
      if (col === BLOCK) {
        tile.classList.add('block');

      } else if (col === COIN) {
        tile.classList.add('coin');

      } else if (col === SCOIN) {
        tile.classList.add('supercoin');

      } else if (col === GROUND) {
        tile.classList.add('ground');

      } else if (col === PACMAN) {
        tile.classList.add('pacman');

      } else if (col === RED){
        tile.classList.add('red');
      
      } else if (col === BLUE){
        tile.classList.add('blue');
      
      } else if (col === ORANGE){
        tile.classList.add('orange');

      } else if (col === PINK){
        tile.classList.add('pink');
      

        
        tile.classList.add(pacman.direction);

      }

    
      tilesArray.push(tile);
    }

  
    let brTile = document.createElement('br');
 
    tilesArray.push(brTile);
  }
  return tilesArray;
}

function drawMap() {
  map = document.createElement('div');

  let tiles = createTiles(gameData);
  for (let tile of tiles) {
    map.appendChild(tile);
  }

  document.body.appendChild(map);
}

//asignamos los numeros que van a ser representados en el mapa
const BLOCK = 1;
const COIN = 2;
const PACMAN = 3;
const GROUND = 4;
const RED = 5;
const BLUE = 6;
const ORANGE = 7;
const PINK = 8;
const SCOIN = 9;

//creamos el mapa  
let gameData = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,9,2,2,2,2,2,2,2,2,2,2,1,1,1,2,2,2,2,2,2,2,2,2,9,1],
  [1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1,1,1,1,2,1],
  [1,2,1,0,0,0,0,0,0,0,1,2,1,1,1,2,1,0,0,0,0,0,0,1,2,1],
  [1,2,1,1,1,1,1,1,1,1,1,2,2,9,2,2,1,1,1,1,1,1,1,1,2,1],
  [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
  [1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1],
  [1,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,1],
  [1,1,1,1,1,2,1,1,2,1,1,0,0,0,0,0,1,1,2,1,2,1,1,1,1,1],
  [1,1,1,1,1,2,1,1,2,1,0,0,5,0,6,0,0,1,2,1,2,1,1,1,1,1],
  [1,1,1,1,1,2,1,1,2,1,0,0,0,0,0,0,0,1,2,1,2,1,1,1,1,1],
  [1,1,1,1,1,2,1,1,2,1,0,0,7,0,8,0,0,1,2,1,2,1,1,1,1,1],
  [1,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,1],
  [1,2,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,2,1],
  [1,2,2,2,2,2,2,2,2,2,2,2,1,1,1,2,2,2,2,2,2,2,2,2,2,1],
  [1,2,1,1,1,1,1,1,1,1,1,2,2,9,2,2,1,1,1,1,1,1,1,1,2,1],
  [1,2,1,0,0,0,0,0,0,0,1,2,1,1,1,2,1,0,0,0,0,0,0,1,2,1],
  [1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1,1,1,1,2,1],
  [1,9,2,2,2,2,2,2,2,2,2,2,1,1,1,2,2,2,2,2,2,2,2,2,9,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];

// Utilizaremos el identificador "map" para referirnos al mapa del juego.
let map;

let pacman = {
  x: 13,
  y: 5,
  direction: 'right'
};