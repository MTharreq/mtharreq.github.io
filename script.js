const fonts = ['Poppins', 'Bebas Neue', 'IBM Plex Mono', 'Lexend Mega', 'Inter'];

// For generate Index Random with arr parameter
function iRandom(arr){
    return Math.floor(Math.random() * arr.length)
}

function changeFont() {
    const char1 = document.getElementById('char1');
    const char2 = document.getElementById('char2');
    const char3 = document.getElementById('char3');
    const char4 = document.getElementById('char4');
    const char5 = document.getElementById('char5');
    const char6 = document.getElementById('char6');
    const char7 = document.getElementById('char7');
    const char8 = document.getElementById('char8');
    const char9 = document.getElementById('char9');
    const char10 = document.getElementById('char10');
    const char11 = document.getElementById('char11');
    const char12 = document.getElementById('char12');

    char1.style.fontFamily = fonts[2];
    console.log('Hallo')
    setInterval(() => char1.style.fontFamily = fonts[iRandom(fonts)], 5000);
}

function changeColor() {
    const colors = ["#3DC39B", "#928CF8", "#FCC526", "#FE74A6", "#5B6DFF"];
    const highlight = document.getElementById('highlighter');
    
    // Initiate First Color
    highlight.style.backgroundColor = colors[iRandom(colors)];
    
    // Change color every 3 seconds
    setInterval(() => highlight.style.backgroundColor = colors[iRandom(colors)], 3000);
}

window.onload = changeColor() || changeFont();
// window.onload = changeFont;