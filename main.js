'use strict';

//six functions to display different color schemes
function standardScheme() {
    document.getElementById('buttons').style = 'background-color:gray';
    document.getElementById('content').style = 'background-color:lightgray; color:black';
    console.clear()
    console.log('default setting: black, gray and lightgray');
    document.getElementById('explain').textContent = 'Try the different color schemes by clicking on the buttons above or on the boxes below.'
    
}

function second() {
    document.getElementById('buttons').style = 'background-color:#f57e7e';
    document.getElementById('content').style = 'background-color:#efb5a3; color:#315f72';
    console.clear();
    console.log('peach, salmon and blue-green');
    document.getElementById('explain').textContent = 'Peach, Salmon and Blue-green';
}

function third() {
    document.getElementById('buttons').style = 'background-color:#e0a96d';
    document.getElementById('content').style = 'background-color:#ddc3a5; color:#201e20';
    console.clear();
    console.log('beige, black-brown, lightbrown');
    document.getElementById('explain').textContent = 'Beige, Black-Brown and Lightbrown';
}

function fourth() {
    document.getElementById('buttons').style = 'background-color:#d2601a';
    document.getElementById('content').style = 'background-color:#1d3c45; color:#fff1e1';
    console.clear();
    console.log('dark pinegreen, orange and light peach');
    document.getElementById('explain').textContent = 'Dark Pine Green, Orange and Light Peach';
}

function fifth() {
    document.getElementById('buttons').style = 'background-color:#6883bc';
    document.getElementById('content').style = 'background-color:#79a7d3; color:#8a307f';
    console.clear();
    console.log('raspberry and blue');
    document.getElementById('explain').textContent = 'Raspberry and Blue';
}

function sixth() {
    document.getElementById('buttons').style = 'background-color:#ffd700';
    document.getElementById('content').style = 'background-color:#3b4d61; color:#6b7b8c';
    console.clear();
    console.log('gold, coal and gray');
    document.getElementById('explain').textContent = 'Gold, Coal and Gray';
}

//six functions for changing the language
let standardLanguage = () => {
    document.getElementById('headOne').textContent = 'Default';
    document.getElementById('headTwo').textContent = '2nd Scheme';
    document.getElementById('headThree').textContent = '3rd Scheme';
    document.getElementById('headFour').textContent = '4th Scheme';
    document.getElementById('headFive').textContent = '5th Scheme';
    document.getElementById('headSix').textContent = '6th Scheme';

    document.getElementById('paraOne').textContent ='This is the standard scheme on this page. Really uncolorful and sad.'
    document.getElementById('paraTwo').textContent ='When you click on this button the background-, and the font color is changing.'
    document.getElementById('paraThree').textContent ='This scheme displays the colors beige, black-brown and lightbrown.'
    document.getElementById('paraFour').textContent ='Dark pine green, orange and light peach appears when you click on the foudrth button.'
    document.getElementById('paraFive').textContent ='Change the colors to raspberry and blue tones.'
    document.getElementById('paraSix').textContent ='Try the last color scheme on this page.'

}



//Default function when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    standardScheme();
    standardLanguage();
})


