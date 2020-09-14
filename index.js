// declarando as váriaveis 
const buttonElements = document.querySelectorAll('.clickable');
const controlElement = document.querySelector('.control .background');
const controlStatusElement = document.querySelector('.control p');
const scoreElement = document.querySelector('.score');
const highScoreElement = document.querySelector('.high-score');
const container = document.querySelector('.container');
const nightModeButton = document.querySelector('.night-mode-button');

let roundAswers =[];
let playerAnswers = [];
let difficult = 4;
let intervalDecrease = 0;
let score = 0;
let highScore = 0;

let waitingPlayerAnswer = false;
let canStarRound = true;

//metodo para comecar a partida sortendo aleatoriamente
const getRandomValueArray = (array) => { 
    return array[Math.floor(Math.random() * array.length)];
};

const displaySequence = (index)=>{
    const element = roundAnswers[index];
    setTimeout(()=>{
        element.classList.add('active');

        setTimeout(()=>{
            element.classList.remove('active')
            index++;
            if(index < roundAnswers.length){
                displaySequence(index);
            }else{
                waitingPlayerAnswer= true;

                controlElement.style.backgroundColor = 'lightblue';
                controlStatusElement.innerHTML = 'reproduza'; 

                toggleButtonCursosStyle();
            }
        }, 1000 - intervalDecrease)
    }, 1000 - intervalDecrease)
};
