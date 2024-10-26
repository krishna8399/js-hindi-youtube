console.log("KRISHNA")
const buttons = document.querySelectorAll('.button'); // to select all buttons
const body = document.querySelector('body'); // to select body

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);

        if(e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'red') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'green') {
            body.style.backgroundColor = e.target.id;
        }
    });
});