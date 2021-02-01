// list of available strings and texts for the random generator

const theme1 = {
    firstElement: ['love', 'want', 'appreciate'],
    secondElement: ['beautifull', 'cute', 'pretty'],
    thirdElement: ['everything', 'importand', 'my breath']
};

const theme2 = {
    firstElement: ['bad luck', 'feeling good', 'strange mood'],
    secondElement: ['try', 'train', 'waste'],
    thirdElement: ['protesting', 'agrresivly', 'softly']
};

const theme3 = {
    firstElement: ['spider', 'girlfried', 'boyfriend'],
    secondElement: ['approching', 'diying', 'suffering'],
    thirdElement: ['it', 'this', 'much']
};

// the functionalities

function randomWords(arrayOfWords) {
    const randomchoice = Math.floor(Math.random() * arrayOfWords.length);
    return randomchoice;
};

function sentenceCreator(objectsWithArrays) {
    const firstRandomWord = objectsWithArrays.firstElement[randomWords(objectsWithArrays.firstElement)];
    const secondRandomWord = objectsWithArrays.secondElement[randomWords(objectsWithArrays.secondElement)];
    const thirdRandomWord = objectsWithArrays.thirdElement[randomWords(objectsWithArrays.thirdElement)];
    switch (objectsWithArrays) {
        case theme1:
            return `I ${firstRandomWord} you, beacause you are ${secondRandomWord} and ${thirdRandomWord} for me!`;
            break;
        case theme2:
            return `When ${firstRandomWord} coming to you, never ${secondRandomWord} ${thirdRandomWord}!`;
            break;
        case theme3:
            let wordAsArray = firstRandomWord.split('');
            wordAsArray[0] = wordAsArray[0].toUpperCase()
            let word1 = ''
            wordAsArray.forEach(letter => {
                 word1 += letter;               
            });
            return `${word1} is ${secondRandomWord}, I can't handle ${thirdRandomWord}.`;
            break;
    };
        
};

console.log(sentenceCreator(theme1));
console.log(sentenceCreator(theme2));
console.log(sentenceCreator(theme3));