// list of available strings and texts for the random generator

const theme1 = {
    firstElement: ['love', 'want', 'appreciate'],
    secondElement: ['beautifull', 'cute', 'pretty'],
    thirdElement: ['everything', 'importand', 'my breath']
};

const theme2 = {};
const theme3 = {};

// the functionalities

function randomWords(arrayOfWords) {
    const randomchoice = Math.floor(Math.random() * arrayOfWords.length);
    return randomchoice;
};

function sentenceCreator(objectsWithArrays) {
    const firstRandomWord = objectsWithArrays.firstElement[randomWords(objectsWithArrays.firstElement)];
    const secondRandomWord = objectsWithArrays.secondElement[randomWords(objectsWithArrays.secondElement)];
    const thirdRandomWord = objectsWithArrays.thirdElement[randomWords(objectsWithArrays.thirdElement)];
    return `I ${firstRandomWord} you, beacause you are ${secondRandomWord} and ${thirdRandomWord} for me!`;
};

console.log(sentenceCreator(theme1));