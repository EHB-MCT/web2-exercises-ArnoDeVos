import Cleave from 'cleave.js';
require('cleave.js/dist/addons/cleave-phone.be');

new Cleave('.name', {
    prefix: 'STUDENT-'
});

new Cleave('.date', {
    date: true,
    datePattern: ['d', 'm', 'Y']
});

new Cleave('.rrn', {
    blocks: [2, 2, 2, 3, 2],
    delimiters: ['.', '.', '-', '.']
});

new Cleave('.age', {
    numeral: true,
    numeralPositiveOnly: true
});

new Cleave('.phone', {
    phone: true,
    phoneRegionCode: 'Be'
});

document.getElementById('form').addEventListener('submit', e => {
    e.preventDefault()

    let name = document.getElementsByClassName("name")[0].value;
    let date = document.getElementsByClassName("date")[0].value;
    let RRN = document.getElementsByClassName("rrn")[0].value;
    let age = document.getElementsByClassName("age")[0].value;
    let phone = document.getElementsByClassName("phone")[0].value;

    let htmlString = `
    <h3>${name} was born on ${date} and is ${age}.
    <br>
    The government knows them as ${RRN}.
    <br>
    You can contact them at ${phone}`

    document.getElementById("content").innerHTML = htmlString
})