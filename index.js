/* Simple function to randomize hex */
const randomHex = () => {
    const hexCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let finalResult = ['#'];

    for(let i=0; i<6; i++) {
        finalResult.push(hexCharacters[Math.floor(Math.random()*16)]);
    }

    return finalResult.join('');
}

/* Randomize color when button click */
function changeColor() {
    /* Get random hex and assign to elements */
    let newColor = randomHex();
    document.getElementsByTagName('main')[0].style.backgroundColor = newColor;
    document.getElementsByTagName('button')[0].style.color = newColor;
}