const gameField = document.querySelector('.game-field');
const singleFields = [...document.querySelectorAll('.single-field')];
const displayScore = [...document.querySelectorAll('.score')];
const scoreX = document.getElementById('score-X');
const scoreO = document.getElementById('score-O');
const displayInfo = document.querySelector('.text');
const whoseTurn = document.querySelector('.mark');
const lineThrough = document.querySelector('.line-through');

const selectedGameMode = document.getElementById('game-mode');

let crosses = 0;
let noughts = 0;
let endGame = false;

const addMark = function () {

    if (!this.hasChildNodes()) {
        selectedGameMode.disabled = true;
        const mark = document.createElement('i');
        if (crosses === noughts) {
            mark.className = 'fas fa-times';
            this.classList.add('cross');
            crosses++;

            whoseTurn.textContent = 'O';
            whoseTurn.style.color = '#f2ebd3';
            displayScore[0].classList.remove('active');
            displayScore[1].classList.add('active');
            if (selectedGameMode.selectedIndex === 1) {
                setTimeout(function () {
                    const emptyFields = singleFields.filter(singleField => !singleField.hasChildNodes());
                    if (emptyFields.length > 1 && endGame === false) {
                        const randomField = Math.floor(Math.random() * emptyFields.length);
                        const nought = document.createElement('i');
                        nought.className = 'far fa-circle';
                        emptyFields[randomField].appendChild(nought);
                        emptyFields[randomField].classList.add('nought');
                        noughts++;

                        whoseTurn.textContent = 'X';
                        whoseTurn.style.color = '#545454';
                        displayScore[1].classList.remove('active');
                        displayScore[0].classList.add('active');
                        if (crosses >= 3) checkWin();
                    }
                }, 500);
            }
        } else {
            if (selectedGameMode.selectedIndex === 0) {
                mark.className = 'far fa-circle';
                this.classList.add('nought');
                noughts++;

                whoseTurn.textContent = 'X';
                whoseTurn.style.color = '#545454';
                displayScore[1].classList.remove('active');
                displayScore[0].classList.add('active');
            }
        }
        if (mark.className !== '') this.appendChild(mark);

        if (crosses >= 3) checkWin();
    }
};

singleFields.forEach(singleField => singleField.addEventListener('click', addMark));

const checkWin = function () {

    if ((singleFields[0].className === singleFields[1].className && singleFields[1].className === singleFields[2].className) &&
        (singleFields[0].classList.contains('cross') || singleFields[0].classList.contains('nought'))) {

        lineThrough.style.top = '15%';
        lineThrough.style.animation = 'drawLineH .3s .3s linear both';
        endGame = true;

        gameOver();
        showWhoWon();

    } else if ((singleFields[3].className === singleFields[4].className && singleFields[4].className === singleFields[5].className) &&
        (singleFields[3].classList.contains('cross') || singleFields[3].classList.contains('nought'))) {

        lineThrough.style.top = '50%';
        lineThrough.style.transform = 'translateY(-50%)';
        lineThrough.style.animation = 'drawLineH .3s .3s linear both';
        endGame = true;

        gameOver();
        showWhoWon();

    } else if ((singleFields[6].className === singleFields[7].className && singleFields[7].className === singleFields[8].className) &&
        (singleFields[6].classList.contains('cross') || singleFields[6].classList.contains('nought'))) {

        lineThrough.style.top = '82.5%';
        lineThrough.style.animation = 'drawLineH .3s .3s linear both';
        endGame = true;

        gameOver();
        showWhoWon();

    } else if ((singleFields[0].className === singleFields[3].className && singleFields[3].className === singleFields[6].className) &&
        (singleFields[0].classList.contains('cross') || singleFields[0].classList.contains('nought'))) {

        lineThrough.style.left = '15%';
        lineThrough.style.animation = 'drawLineV .3s .3s linear both';
        endGame = true;

        gameOver();
        showWhoWon();

    } else if ((singleFields[1].className === singleFields[4].className && singleFields[4].className === singleFields[7].className) &&
        (singleFields[1].classList.contains('cross') || singleFields[1].classList.contains('nought'))) {

        lineThrough.style.left = '50%';
        lineThrough.style.transform = 'translateX(-50%)';
        lineThrough.style.animation = 'drawLineV .3s .3s linear both';
        endGame = true;

        gameOver();
        showWhoWon();

    } else if ((singleFields[2].className === singleFields[5].className && singleFields[5].className === singleFields[8].className) &&
        (singleFields[2].classList.contains('cross') || singleFields[2].classList.contains('nought'))) {

        lineThrough.style.left = '82.5%';
        lineThrough.style.animation = 'drawLineV .3s .3s linear both';
        endGame = true;

        gameOver();
        showWhoWon();

    } else if ((singleFields[0].className === singleFields[4].className && singleFields[4].className === singleFields[8].className) &&
        (singleFields[0].classList.contains('cross') || singleFields[0].classList.contains('nought'))) {

        lineThrough.style.transform = 'rotate(45deg) translateY(-50%)';
        lineThrough.style.transformOrigin = '0 0';
        lineThrough.style.animation = 'drawLineXLeft .3s .3s linear both';
        endGame = true;

        gameOver();
        showWhoWon();

    } else if ((singleFields[2].className === singleFields[4].className && singleFields[4].className === singleFields[6].className) &&
        (singleFields[2].classList.contains('cross') || singleFields[2].classList.contains('nought'))) {

        lineThrough.style.transform = 'rotate(-45deg) translateY(-50%)';
        lineThrough.style.transformOrigin = 'right top';
        lineThrough.style.animation = 'drawLineXRight .3s .3s linear both';
        endGame = true;

        gameOver();
        showWhoWon();

    } else if (crosses + noughts === 9) {
        endGame = true;

        gameOver();
        showDraw();
    }
};

const gameOver = function () {

    singleFields.forEach(singleField => singleField.removeEventListener('click', addMark));
    displayInfo.textContent = 'Koniec gry';

    displayScore.forEach(score => {
        if (score.classList.contains('active')) {
            score.classList.remove('active');
        }
    });

    gameField.style.animation = 'hideGameField .6s .9s ease-in-out both';
};

const showWhoWon = function () {

    const mark = document.createElement('i');
    const para = document.createElement('p');
    para.classList.add('info');
    para.textContent = 'Wygrywasz!';

    if (crosses > noughts) {
        lineThrough.style.backgroundColor = '#545454';
        scoreX.textContent === '-' ? scoreX.textContent = 1 : scoreX.textContent++;
        mark.className = 'fas fa-times';
    } else {
        lineThrough.style.backgroundColor = '#f2ebd3';
        scoreO.textContent === '-' ? scoreO.textContent = 1 : scoreO.textContent++;
        mark.className = 'far fa-circle';
        para.style.color = '#f2ebd3';
    }

    mark.style.animation = 'showWhoWon .6s 1.2s ease-in-out both';
    mark.style.cursor = 'pointer';
    mark.addEventListener('click', restartGame);

    document.body.appendChild(mark);
    document.body.appendChild(para);
};

const showDraw = function () {

    const draw = document.createElement('div');
    draw.classList.add('draw');

    const cross = document.createElement('i');
    const nought = document.createElement('i');
    const para = document.createElement('p');

    cross.className = 'fas fa-times';
    cross.addEventListener('click', restartGame);

    nought.className = 'far fa-circle';
    nought.addEventListener('click', restartGame);

    para.classList.add('info');
    para.textContent = 'Remis!';

    draw.appendChild(cross);
    draw.appendChild(nought);
    document.body.appendChild(draw);
    document.body.appendChild(para);
};

const restartGame = function () {

    singleFields.forEach(singleField => {
        if (singleField.hasChildNodes()) {
            singleField.removeChild(singleField.childNodes[0]);
            singleField.classList.contains('cross') ? singleField.classList.remove('cross') : singleField.classList.remove('nought');
        }

        singleField.addEventListener('click', addMark);
    });

    for (let i = 0; i < 2; i++) {
        document.body.removeChild(document.body.lastChild);
    }
    gameField.removeAttribute('style');
    lineThrough.removeAttribute('style');

    displayInfo.textContent = 'Teraz ruch ma ';
    whoseTurn.textContent = 'X';
    whoseTurn.removeAttribute('style');
    displayInfo.appendChild(whoseTurn);

    if (displayScore[1].classList.contains('active')) {
        displayScore[1].classList.remove('active');
        displayScore[0].classList.add('active');
    } else if (!displayScore[0].classList.contains('active')) displayScore[0].classList.add('active');

    crosses = 0;
    noughts = 0;
    endGame = false;

    selectedGameMode.disabled = false;
};

document.querySelector('.restart').addEventListener('click', restartGame);