'use strict';

window.onload = function() {
    console.log('loaded')
    let randomNumber = Math.floor(Math.random() * 21);
    let inputNumber = document.getElementById('number').value;
    console.log(randomNumber);

    document.getElementById('form').addEventListener('submit', e => {
        e.preventDefault();
        compareNumber(inputNumber);

    })

    function compareNumber(n) {

        let inputNumber = document.getElementById('number').value;
// todo: work further here
        console.log(randomNumber);

        if(n > randomNumber) {
            console.log('guess lower');
        } else if (n < randomNumber) {
            console.log('guess up');
        } else if (n == randomNumber) {
            console.log('You have won');
        }

    }

    let promise = new Promise(function(resolve, reject) {
        console.log('Start of promise');
    })

}