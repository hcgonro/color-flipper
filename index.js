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
    /* Colors */
    document.getElementsByTagName('main')[0].style.backgroundColor = newColor;
    document.getElementsByTagName('button')[0].style.color = newColor;
    document.getElementsByTagName('input')[0].style.backgroundColor = newColor;
    document.getElementsByTagName('button')[1].style.color = newColor;
    /* Input value */
    document.getElementsByTagName('input')[0].value = newColor;
    
    /* Enable copy button if disabled and change text to initial*/
    let copyButton = document.getElementsByTagName('button')[1];
    if(copyButton.disabled) {
        copyButton.disabled = false;
    }
     copyButton.innerHTML = 'Copy';
}

/* Function to copy input value in the clipboard */
function copyClipboard() {
    /* Get input and button elements */
    let input = document.getElementsByTagName('input')[0];
    let button = document.getElementsByTagName('button')[1];
    
    /* Copy only when input has value */
    if(input.value != '') {
        /* Select input element */
        input.select();
        /* Copy to clipboard */
        navigator.clipboard.writeText(input.value);
        /* Unselect input element */
        input.blur();

        /* Change button text */
        button.innerHTML = 'Copied!';
        /* Disable button */
        button.disabled = true;
    }
}