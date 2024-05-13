

let inp = document.getElementById('inp');
let btns = document.querySelectorAll('button');
let str = '';

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            str = eval(str);            // Evaluate the expression
            inp.value = str;
        } 
        else if (e.target.innerHTML === 'AC') {
            str = '';
            inp.value = str;
        }
        else if (e.target.innerHTML === 'DEL') {
            str=str.substring(0,str.length-1)           // Remove the last character
            inp.value = str;
        } 
        else {
            str += e.target.innerHTML;
            inp.value = str;
        }
    });
});