const singleFields = [...document.querySelectorAll('.single-field')];

let crosses = 0;
let noughts = 0;

singleFields.forEach(singleField => {
    singleField.addEventListener('click', function () {
        if (!this.hasChildNodes()) {
            const mark = document.createElement('i');
            if (crosses === noughts) {
                mark.className = 'fas fa-times';
                crosses++;
            } else {
                mark.className = 'far fa-circle';
                noughts++;
            }
            this.appendChild(mark);
        }
    });
});

document.querySelector('.restart').addEventListener('click', function () {
    singleFields.forEach(singleField => {
        if (singleField.hasChildNodes()) {
            singleField.removeChild(singleField.childNodes[0]);
        }
    });

    crosses = 0;
    noughts = 0;
});