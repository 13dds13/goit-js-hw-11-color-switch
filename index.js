const data = {
    btnContainer: document.querySelector('.js-btn-container'),
    btnStart: document.querySelector('[data-action="start"]'),
    btnStop: document.querySelector('[data-action="stop"]'),

    colors: ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'],

    randomIntegerFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
};

data.btnContainer.addEventListener('click', onBtnClick);

let idTimer = null;

function onBtnClick(e) {
    if (e.target === data.btnStart) {
        onBtnStartClick();
    };

    if (e.target === data.btnStop) {
        onBtnStopClick();
    };
};

function randomBodyColor() {
    const randomColorsItem = data.randomIntegerFromInterval(0, (data.colors.length - 1));
    document.body.style.backgroundColor = `${data.colors[randomColorsItem]}`;
};

function onBtnStartClick() {
    idTimer = setInterval(randomBodyColor, 1000);
    data.btnStart.disabled = true;
};

function onBtnStopClick() {
    clearInterval(idTimer)
    data.btnStart.disabled = false;
};


