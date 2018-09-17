const singleFields = [...document.querySelectorAll('.single-field')];

let crosses = 0;
let noughts = 0;

const addMark = function () {
    if (!this.hasChildNodes()) {
        const mark = document.createElement('i');
        if (crosses === noughts) {
            mark.className = 'fas fa-times';
            this.classList.add('cross');
            crosses++;
        } else {
            mark.className = 'far fa-circle';
            this.classList.add('nought');
            noughts++;
        }
        this.appendChild(mark);

        if (crosses >= 3) checkWin();
    }
};

singleFields.forEach(singleField => singleField.addEventListener('click', addMark));

const lineThrough = document.querySelector('.line-through');

const checkWin = function () {

    if ((singleFields[0].className === singleFields[1].className && singleFields[1].className === singleFields[2].className) &&
        (singleFields[0].classList.contains('cross') || singleFields[0].classList.contains('nought'))) {
        lineThrough.style.top = '15%';
        singleFields[0].classList.contains('cross') ? lineThrough.style.backgroundColor = '#545454' : lineThrough.style.backgroundColor = '#f2ebd3';
        lineThrough.style.animation = 'drawLineH .3s linear both';
    } else if ((singleFields[3].className === singleFields[4].className && singleFields[4].className === singleFields[5].className) &&
        (singleFields[3].classList.contains('cross') || singleFields[3].classList.contains('nought'))) {
        lineThrough.style.top = '50%';
        lineThrough.style.transform = 'translateY(-50%)';
        singleFields[3].classList.contains('cross') ? lineThrough.style.backgroundColor = '#545454' : lineThrough.style.backgroundColor = '#f2ebd3';
        lineThrough.style.animation = 'drawLineH .3s linear both';
    } else if ((singleFields[6].className === singleFields[7].className && singleFields[7].className === singleFields[8].className) &&
        (singleFields[6].classList.contains('cross') || singleFields[6].classList.contains('nought'))) {
        lineThrough.style.top = '82.5%';
        singleFields[6].classList.contains('cross') ? lineThrough.style.backgroundColor = '#545454' : lineThrough.style.backgroundColor = '#f2ebd3';
        lineThrough.style.animation = 'drawLineH .3s linear both';
    } else if ((singleFields[0].className === singleFields[3].className && singleFields[3].className === singleFields[6].className) &&
        (singleFields[0].classList.contains('cross') || singleFields[0].classList.contains('nought'))) {
        lineThrough.style.left = '15%';
        singleFields[0].classList.contains('cross') ? lineThrough.style.backgroundColor = '#545454' : lineThrough.style.backgroundColor = '#f2ebd3';
        lineThrough.style.animation = 'drawLineV .3s linear both';
    } else if ((singleFields[1].className === singleFields[4].className && singleFields[4].className === singleFields[7].className) &&
        (singleFields[1].classList.contains('cross') || singleFields[1].classList.contains('nought'))) {
        lineThrough.style.left = '50%';
        lineThrough.style.transform = 'translateX(-50%)';
        singleFields[1].classList.contains('cross') ? lineThrough.style.backgroundColor = '#545454' : lineThrough.style.backgroundColor = '#f2ebd3';
        lineThrough.style.animation = 'drawLineV .3s linear both';
    } else if ((singleFields[2].className === singleFields[5].className && singleFields[5].className === singleFields[8].className) &&
        (singleFields[2].classList.contains('cross') || singleFields[2].classList.contains('nought'))) {
        lineThrough.style.left = '82.5%';
        singleFields[2].classList.contains('cross') ? lineThrough.style.backgroundColor = '#545454' : lineThrough.style.backgroundColor = '#f2ebd3';
        lineThrough.style.animation = 'drawLineV .3s linear both';
    } else if ((singleFields[0].className === singleFields[4].className && singleFields[4].className === singleFields[8].className) &&
        (singleFields[0].classList.contains('cross') || singleFields[0].classList.contains('nought'))) {
        lineThrough.style.transform = 'rotate(45deg) translateY(-50%)';
        lineThrough.style.transformOrigin = '0 0';
        singleFields[0].classList.contains('cross') ? lineThrough.style.backgroundColor = '#545454' : lineThrough.style.backgroundColor = '#f2ebd3';
        lineThrough.style.animation = 'drawLineXLeft .3s linear both';
    } else if ((singleFields[2].className === singleFields[4].className && singleFields[4].className === singleFields[6].className) &&
        (singleFields[2].classList.contains('cross') || singleFields[2].classList.contains('nought'))) {
        lineThrough.style.transform = 'rotate(-45deg) translateY(-50%)';
        lineThrough.style.transformOrigin = 'right top';
        singleFields[2].classList.contains('cross') ? lineThrough.style.backgroundColor = '#545454' : lineThrough.style.backgroundColor = '#f2ebd3';
        lineThrough.style.animation = 'drawLineXRight .3s linear both';
    }

};

document.querySelector('.restart').addEventListener('click', function () {
    singleFields.forEach(singleField => {
        if (singleField.hasChildNodes()) {
            singleField.removeChild(singleField.childNodes[0]);
            singleField.classList.contains('cross') ? singleField.classList.remove('cross') : singleField.classList.remove('nought');
        }

        singleField.addEventListener('click', addMark);
    });

    lineThrough.removeAttribute('style');

    crosses = 0;
    noughts = 0;
});