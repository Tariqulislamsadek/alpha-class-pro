function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstwxyz'
    const alphabet = alphabetString.split('');
}