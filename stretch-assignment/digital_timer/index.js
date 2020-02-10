const msTens = document.getElementById('msTens');
const msHundreds = document.getElementById('msHundreds');
const secondOnes = document.getElementById('secondOnes');
const secondTens = document.getElementById('secondTens');
msTens.textContent = 0;
msHundreds.textContent = 0;
secondOnes.textContent = 0;
secondTens.textContent = 0;

const digits = document.getElementsByClassName('digits')[0];

const counterInterval = window.setInterval(() => {
    if (msTens.textContent === '9') {
        msTens.textContent = 0;

        if (msHundreds.textContent === '9') {
            msHundreds.textContent = 0;

            if (secondOnes.textContent === '9') {
                secondOnes.textContent = 0;
                secondTens.textContent++;

                window.clearInterval(counterInterval);
                digits.classList.add('redDigit');

                return;
            }

            secondOnes.textContent++;
        }

        msHundreds.textContent++;

    } else {
        msTens.textContent++;
    }
}, 10);