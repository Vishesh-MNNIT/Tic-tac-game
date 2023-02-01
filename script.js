console.log("Welcome to game")
let music = new Audio("songs/music.mp3")
let audioturn = new Audio("songs/ting.mp3")
let gameover = new Audio("songs/gameover.mp3")
let turn = "X"
let game = false;
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

const checkwin = () => {
    let boxtext =  document.getElementsByClassName('boxtext');

    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "WON";
            game = true;
        }
    })


}

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach((temp) => {

    let boxtext = temp.querySelector('.boxtext');
    temp.addEventListener('click', function () {
        if (boxtext.innerText === "") {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkwin();
            if (!game) {
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    })


})