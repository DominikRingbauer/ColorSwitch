'use strict';

//six function to display different color schemes
function standard() {
    document.getElementById('buttons').style = 'background-color:gray';
    document.getElementById('content').style = 'background-color:lightgray; color:black';
    console.clear()
    console.log('default setting: black, gray and lightgray');
    document.getElementById('para1').textContent = 'Try the different color schemes by clicking on the buttons above or on the boxes below.'
    
}

function second() {
    document.getElementById('buttons').style = 'background-color:#f57e7e';
    document.getElementById('content').style = 'background-color:#efb5a3; color:#315f72';
    console.clear();
    console.log('peach, salmon and blue-green');
    document.getElementById('para1').textContent = 'Peach, Salmon and Blue-green';
}

function third() {
    document.getElementById('buttons').style = 'background-color:#e0a96d';
    document.getElementById('content').style = 'background-color:#ddc3a5; color:#201e20';
    console.clear();
    console.log('beige, black-brown, lightbrown');
    document.getElementById('para1').textContent = 'Beige, Black-Brown and Lightbrown';
}

function fourth() {
    document.getElementById('buttons').style = 'background-color:#d2601a';
    document.getElementById('content').style = 'background-color:#1d3c45; color:#fff1e1';
    console.clear();
    console.log('dark pinegreen, orange and light peach');
    document.getElementById('para1').textContent = 'Dark Pine Green, Orange and Light Peach';
}

function fifth() {
    document.getElementById('buttons').style = 'background-color:#6883bc';
    document.getElementById('content').style = 'background-color:#79a7d3; color:#8a307f';
    console.clear();
    console.log('raspberry and blue');
    document.getElementById('para1').textContent = 'Raspberry and Blue';
}

function sixth() {
    document.getElementById('buttons').style = 'background-color:#ffd700';
    document.getElementById('content').style = 'background-color:#3b4d61; color:#6b7b8c';
    console.clear();
    console.log('gold, coal and gray');
    document.getElementById('para1').textContent = 'Gold, Coal and Gray';
}

//Default function when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    standard();
})


