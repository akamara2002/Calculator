const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll ('.btn');
const clear = document.querySelector ('.btn-clear');
const equal = document.querySelector ('.btn-equal');

buttons.forEach (button => {
    button.addEventListener ('click', e => {
        console.log (e.target);
        let value = e.target.dataset.num;
        screen.value += value;
    })
})

equal.addEventListener('click', e => {
    if (screen.value === '') {
        screen.value = "please enter";
    } else {
        let answer = eval(screen.value);
        screen.value = answer;
    }
})

clear.addEventListener ('click', e => {
    screen.value = "";
})