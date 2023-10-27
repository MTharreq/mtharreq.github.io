const colors = ["#3DC39B", "#928CF8", "#FCC526", "#FE74A6", "#5B6DFF"];
const fonts = ['Poppins', 'Bebas Neue', 'IBM Plex Mono', 'Lexend Mega', 'Inter', 'Playfair Display'];
const fontStyles = ['normal', 'italic']
const fontWeight = [100, 200, 300, 400, 500, 600, 700, 800, 900]
const textTransform = ['uppercase', 'lowercase', 'capitalize']

const chars = [];
for (let i = 1; i <= 12; i++) {
    chars.push(document.getElementById(`char${i}`));
}

const words = [];
for (let i = 1; i <= 3; i++) {
    words.push(document.getElementById(`word${i}`));
}

const highlight = document.getElementById('highlighter');

// **For generate Index Random with arr parameter
function iRandom(arr){
    return Math.floor(Math.random() * arr.length)
}

// **Random with Min and Max value
function timerRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function changeFont(){
    function setFontStyles(char){
        chars[char].style.fontFamily = fonts[iRandom(fonts)]
        chars[char].style.fontStyle = fontStyles[iRandom(fontStyles)]
        chars[char].style.fontWeight = fontWeight[iRandom(fontWeight)]
        chars[char].style.textTransform = textTransform[iRandom(textTransform)]
    }

    // **Change font family style
    function changes(char, timer=500) {
        setInterval(
            function (){
                chars[char].style.fontFamily = fonts[iRandom(fonts)]
                chars[char].style.fontStyle = fontStyles[iRandom(fontStyles)]
                chars[char].style.fontWeight = fontWeight[iRandom(fontWeight)]
                chars[char].style.textTransform = textTransform[iRandom(textTransform)]
            },
            timer
        );
    }

    // **Initiate First Color
    for (let i=0; i<chars.length; i++){
        setFontStyles(i);
    }

    // **Change Font Style for 15-30s
    for (let i=0; i<chars.length; i++){
        changes(i, timerRandom(5000, 30000));
    }
}

function changeWord(){
    function setFontStyles(word){
        words[word].style.fontFamily = fonts[iRandom(fonts)]
        words[word].style.fontStyle = fontStyles[iRandom(fontStyles)]
        words[word].style.fontWeight = fontWeight[iRandom(fontWeight)]
        words[word].style.textTransform = textTransform[iRandom(textTransform)]
    }

    // **Change font family style
    function changes(word, timer=500) {
        setInterval(
            function (){
                words[word].style.fontFamily = fonts[iRandom(fonts)]
                words[word].style.fontStyle = fontStyles[iRandom(fontStyles)]
                words[word].style.fontWeight = fontWeight[iRandom(fontWeight)]
                words[word].style.textTransform = textTransform[iRandom(textTransform)]
            },
            timer
        );
    }

    // **Initiate First Color
    for (let i=0; i<words.length; i++){
        setFontStyles(i);
    }

    // **Change Font Style for 15-30s
    for (let i=0; i<words.length; i++){
        changes(i, timerRandom(1000, 3000));
    }
}

function changeColor() { 
    // **Initiate First Color
    highlight.style.backgroundColor = colors[iRandom(colors)];
    
    // **Change color every 5 seconds
    setInterval(() => highlight.style.backgroundColor = colors[iRandom(colors)], 5000);
}

window.onload = changeFont() || changeColor() || changeWord();