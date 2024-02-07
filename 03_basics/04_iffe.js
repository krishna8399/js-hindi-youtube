// IIFE (immediately invoked function expression)
// to avoid pollution caused by global scope iffe is used
(function chai (){
    console.log(`DB Connected`);
})(); // should end with semicolon


//()() // first braclet for func def second is execn call

( () => {
    console.log(`DB coonected 1`)
} )()