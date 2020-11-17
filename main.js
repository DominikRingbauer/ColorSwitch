'use strict';

//six functions to display different color schemes
function standardScheme() {
    document.getElementById('buttons').style = 'background-color:gray';
    document.getElementById('content').style = 'background-color:lightgray; color:black';
    console.clear()
    console.log('default setting: black, gray and lightgray');
    
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
const html = document.querySelector('html');

let standardLanguage = () => {
    //buttons
    document.getElementsByClassName('btn')[0].textContent = 'Default';
    document.getElementsByClassName('btn')[1].textContent = 'German';
    document.getElementsByClassName('btn')[2].textContent = 'French';
    document.getElementsByClassName('btn')[3].textContent = 'Italian';
    document.getElementsByClassName('btn')[4].textContent = 'Spanish';
    document.getElementsByClassName('btn')[5].textContent = 'Slovak';
    //Explanation paragraph
    document.getElementById('explain').textContent = 'Try the different color schemes by clicking on the buttons above or on the boxes below.';
    //headings
    document.getElementById('headOne').textContent = 'Default';
    document.getElementById('headTwo').textContent = '2nd Scheme';
    document.getElementById('headThree').textContent = '3rd Scheme';
    document.getElementById('headFour').textContent = '4th Scheme';
    document.getElementById('headFive').textContent = '5th Scheme';
    document.getElementById('headSix').textContent = '6th Scheme';
    //paragraphs
    document.getElementById('paraOne').textContent ='This is the standard scheme on this page. Very uncolorful and sad.'
    document.getElementById('paraTwo').textContent ='When you click on this button the background-, and the font color is changing.'
    document.getElementById('paraThree').textContent ='This scheme displays the colors beige, black-brown and lightbrown.'
    document.getElementById('paraFour').textContent ='Dark pine green, orange and light peach appears when you click on the fourth button.'
    document.getElementById('paraFive').textContent ='Change the colors to raspberry and blue tones.'
    document.getElementById('paraSix').textContent ='Try the last color scheme on this page.'
    //attribut lang in html-tag
    html.setAttribute('lang', 'en');
}

let german = () => {
    //buttons
    document.getElementsByClassName('btn')[0].textContent = 'Standard';
    document.getElementsByClassName('btn')[1].textContent = 'Deutsch';
    document.getElementsByClassName('btn')[2].textContent = 'Fränzösich';
    document.getElementsByClassName('btn')[3].textContent = 'Italienisch';
    document.getElementsByClassName('btn')[4].textContent = 'Spanisch';
    document.getElementsByClassName('btn')[5].textContent = 'Slowakisch';
    //Explanation paragraph
    document.getElementById('explain').textContent = 'Probiere die verschiedenen Farbschemata aus, indem du auf die Schaltflächen oben oder auf die Felder unten klickst.';
    //headings
    document.getElementById('headOne').textContent = 'Standard';
    document.getElementById('headTwo').textContent = '2. Schema';
    document.getElementById('headThree').textContent = '3. Schema';
    document.getElementById('headFour').textContent = '4. Schema';
    document.getElementById('headFive').textContent = '5. Schema';
    document.getElementById('headSix').textContent = '6. Schema';
    //paragraph
    document.getElementById('paraOne').textContent ='Das ist das Standardschema auf dieser Seite. Sehr farblos und traurig.'
    document.getElementById('paraTwo').textContent ='Wenn du auf diese Schaltfläche klickst, ändert sich der Hintergrund und die Schriftfarbe.'
    document.getElementById('paraThree').textContent ='Dieses Schema zeigt die Farben Beige, Schwarzbraun und Hellbraun an.'
    document.getElementById('paraFour').textContent ='Dunkles Piniengrün, Orange und heller Pfirsich werden angezeigt, wenn du auf die vierte Schaltfläche klickst.'
    document.getElementById('paraFive').textContent ='Ändere die Farben zu Himbeere und Blautöne.'
    document.getElementById('paraSix').textContent ='Probiere das letzte Farbschema aus.'
    //attribut lang in html-tag
    html.setAttribute('lang', 'de');
}

let french = () => {
    //buttons
    document.getElementsByClassName('btn')[0].textContent = 'Défaut';
    document.getElementsByClassName('btn')[1].textContent = 'German';
    document.getElementsByClassName('btn')[2].textContent = 'French';
    document.getElementsByClassName('btn')[3].textContent = 'Italian';
    document.getElementsByClassName('btn')[4].textContent = 'Spanish';
    document.getElementsByClassName('btn')[5].textContent = 'Slovak';
    //Explanation paragraph
    document.getElementById('explain').textContent = '';
    //headings
    document.getElementById('headOne').textContent = 'Défaut';
    document.getElementById('headTwo').textContent = '2e schème';
    document.getElementById('headThree').textContent = '3e schème';
    document.getElementById('headFour').textContent = '4e schème';
    document.getElementById('headFive').textContent = '5e schème';
    document.getElementById('headSix').textContent = '6e schème';
    //paragraph
    document.getElementById('paraOne').textContent ='C\'est le schéma standard sur cette page. Très incolore et triste.'
    document.getElementById('paraTwo').textContent ='Lorsque vous cliquez sur ce bouton, l\'arrière-plan et la couleur de la police changent.'
    document.getElementById('paraThree').textContent ='Ce schéma affiche les couleurs beige, brun noir et brun clair.'
    document.getElementById('paraFour').textContent ='Le vert pin foncé, l\'orange et la pêche claire apparaissent lorsque vous cliquez sur le quatrième bouton.'
    document.getElementById('paraFive').textContent ='Changez les couleurs en tons de framboise et de bleu.'
    document.getElementById('paraSix').textContent ='Essayez le dernier jeu de couleurs sur cette page.'
    //attribut lang in html-tag
    html.setAttribute('lang', 'fr');
}

let italian = () => {
    document.getElementById('explain').textContent = '';

    //headings
    document.getElementById('headOne').textContent = 'Standard';
    document.getElementById('headTwo').textContent = '2. Schema';
    document.getElementById('headThree').textContent = '3. Schema';
    document.getElementById('headFour').textContent = '4. Schema';
    document.getElementById('headFive').textContent = '5. Schema';
    document.getElementById('headSix').textContent = '6. Schema';
    //paragraph
    document.getElementById('paraOne').textContent =''
    document.getElementById('paraTwo').textContent =''
    document.getElementById('paraThree').textContent =''
    document.getElementById('paraFour').textContent =''
    document.getElementById('paraFive').textContent =''
    document.getElementById('paraSix').textContent =''
    //attribut lang in html-tag
    html.setAttribute('lang', 'de');
}

let spanish = () => {
    document.getElementById('explain').textContent = '';

    //headings
    document.getElementById('headOne').textContent = 'Standard';
    document.getElementById('headTwo').textContent = '2. Schema';
    document.getElementById('headThree').textContent = '3. Schema';
    document.getElementById('headFour').textContent = '4. Schema';
    document.getElementById('headFive').textContent = '5. Schema';
    document.getElementById('headSix').textContent = '6. Schema';
    //paragraph
    document.getElementById('paraOne').textContent =''
    document.getElementById('paraTwo').textContent =''
    document.getElementById('paraThree').textContent =''
    document.getElementById('paraFour').textContent =''
    document.getElementById('paraFive').textContent =''
    document.getElementById('paraSix').textContent =''
    //attribut lang in html-tag
    html.setAttribute('lang', 'de');
}

let slovak = () => {
    document.getElementById('explain').textContent = '';

    //headings
    document.getElementById('headOne').textContent = 'Standard';
    document.getElementById('headTwo').textContent = '2. Schema';
    document.getElementById('headThree').textContent = '3. Schema';
    document.getElementById('headFour').textContent = '4. Schema';
    document.getElementById('headFive').textContent = '5. Schema';
    document.getElementById('headSix').textContent = '6. Schema';
    //paragraph
    document.getElementById('paraOne').textContent =''
    document.getElementById('paraTwo').textContent =''
    document.getElementById('paraThree').textContent =''
    document.getElementById('paraFour').textContent =''
    document.getElementById('paraFive').textContent =''
    document.getElementById('paraSix').textContent =''
    //attribut lang in html-tag
    html.setAttribute('lang', 'de');
}



//Default functions when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    standardScheme();
    standardLanguage();
})


