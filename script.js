function changeColor() {
    const colors = ["#3DC39B", "#928CF8", "#FCC526", "#FE74A6", "#5B6DFF"]; // Define your colors here
    const highlight = document.getElementById('highlighter');
    let currentIndex = 0;

    setInterval(function() {
        highlight.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
    }, 5000); // Change color every 5 seconds (5000 milliseconds)
}

window.onload = changeColor;