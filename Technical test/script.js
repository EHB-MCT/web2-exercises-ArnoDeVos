"use strict";

//const apiKey  = "fb0b372e816a26db5943d4503534c5b9edbd780d";


function fetchStations(){
    fetch(`https://api.jcdecaux.com/vls/v1/stations?apiKey=6d5071ed0d0b3b68462ad73df43fd9e5479b03d6&contract=Bruxelles-Capitale`)
    .then(response => response.json())
    .then(data => 
        console.log(data))
};

window.onload = function(){
    fetchStations();
};