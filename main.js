// Xify - Returns 'x' in every part of string.
function xify(string){

    let output = '';

    for (let i = 0; i < string.length; i++){
        output += 'x';
    }

    return output;
}
console.log(xify('hello'), 'xxxxx');
console.log(xify('hi there'), 'xxxxxxxx');

//==========================================================

function yellingChars(string){

    let output = '';

    for (let i = 0; i < string.length; i++){
        output += string[i]
        output += '!';
    }
    return output;
}

console.log(yellingChars('goodness'),'g!o!o!d!n!e!s!s!');
console.log(yellingChars('oh hello'), 'o!h! !h!e!l!l!o!');

//=========================================================

function indexedChars(string){
    let output = '';
    
    for(let i = 0; i <string.length; i++){
    output +=i;
    output += string[i];
    }
}

console.log(indexedChars('hello'),'0h1e2l3l4o');
console.log(indexedChars('bye'),'0b1y2e');

//Emailify=========================================================

function ciEmailify(name){

    let output = '';

    for (const character of name){
        if (character === ' '){
            output += '.';
        }

        else {
            output += character.toLowerCase();
        }

    }
    output += '@codeimmersives.com';
    return output;
}

console.log(ciEmailify('colin jaffe'));
console.log(ciEmailify('Anthony DeRosa'));

//Crazy Case Return========================================================