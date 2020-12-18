const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

const creatMapBox = document.createElement('div');
creatMapBox.id = 'mapBox';
creatMapBox.classList.add('map');
document.body.appendChild(creatMapBox);
const mapBox = document.getElementById('mapBox');


map.forEach(renderMap);

renderPlayer();

document.addEventListener('keydown',moveplayer);


function renderMap(cur,ind){
    
    let row = document.createElement('div');
    row.id = 'row' + ind;
    row.classList.add('map__row');
    
    for(let i = 0; i < cur.length; i++){
        let component = document.createElement('div');
        component.classList.add('map__component');
        if(cur[i] === 'W'){
            component.classList.add('map__component--wall')
        }
        if(cur[i] === 'S'){
            component.id = 'start';
        }
        if(cur[i] === 'F'){
            component.id = 'finish';
        }
        row.appendChild(component);
    }
    mapBox.appendChild(row);
};

function renderPlayer() {
    const creatPlayer = document.createElement('div');
    const start = document.getElementById('start');
    creatPlayer.id = 'player';
    creatPlayer.classList.add('map__component');
    creatPlayer.classList.add('map__component--player');
    start.appendChild(creatPlayer);
};

let positionX = 0;

function moveplayer(e) {
    const keyName = e.key;
    const player = document.getElementById('player');
    const previousRow = player.parentElement.parentElement.previousElementSibling;
    const nextRow = player.parentElement.parentElement.nextElementSibling;    
    const playerLeft = player.parentElement.previousElementSibling;
    const playerRight = player.parentElement.nextElementSibling;    
    
    if(keyName === 'ArrowUp'){
        const playerUp = previousRow.childNodes[positionX];
        if(playerUp.classList.length === 1){
            playerUp.appendChild(player);
        }
    }
    if(keyName === 'ArrowDown'){
        const playerDown = nextRow.childNodes[positionX];
        if(playerDown.classList.length === 1){
            playerDown.appendChild(player);
        }
    }
    if(keyName === 'ArrowLeft' && positionX > 0){

        if(playerLeft.classList.length === 1){
            playerLeft.appendChild(player);
            positionX--;
        }
    }
    if(keyName === 'ArrowRight' && positionX < 20){

        if(playerRight.id === 'finish'){
            const message = document.createElement('p');
            message.textContent = 'PARABENS!!! VOCÊ CONSEGUIU CONCLUIR O LABIRINTO :^)'
            message.classList.add('map__message');
            document.body.appendChild(message);
        }

        if(playerRight.classList.length === 1){
            playerRight.appendChild(player);
            positionX++;
        }
    }
    
};

