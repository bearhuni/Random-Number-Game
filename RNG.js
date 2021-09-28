const form = document.querySelector("#chooseNumForm"),
    range = document.querySelector("#rangeInput"),
    inputNum = form.querySelector("#chooseNum"),
    gameChoose = document.querySelector("#gameChoose"),
    gameResult = document.querySelector("#gameResult");


    
function result(myNum, randomNum){
    gameChoose.innerText=`You chose: ${myNum}, the machine chose ${randomNum}`;
    myNum = parseInt(myNum);
    if (myNum === randomNum){ 
        gameResult.innerText=`You won!`;
    }else{
        gameResult.innerText=`You lose!`;
    }
}
function makeRandNum(e){
    e.preventDefault();
    const myNum = inputNum.value;
    const maxNum = range.value;
    const randomNum = Math.ceil(Math.random() * maxNum);
    result(myNum, randomNum);
}
function handleInput(){
    form.addEventListener("submit", makeRandNum);
}
function init(){
    range.oninput = handleInput;
}
init();