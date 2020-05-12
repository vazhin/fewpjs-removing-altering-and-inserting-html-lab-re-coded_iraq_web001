// Write your code here!
let main = document.querySelector('main#main');
main.remove();

let newHeader = document.createElement('h1');
let body = document.querySelector('body');
body.appendChild(newHeader).id="victory";

newHeader.innerHTML = 'vazhin is the champion';
