console.log('main js');


const throwButton = document.querySelector('.throw-button');
console.log("throw-button is " + throwButton);

throwButton.addEventListener('click', myFunction);

let counter = 0;

function myFunction() {
    const a = Math.random() * (10 - 1) + 1
    console.log(`Random value between 1 and 10 is ${a}`);


}