var myFunction = function() {
    var myValue = document.getElementById('myInput').value;

    myValue = myValue.toUpperCase();
};

document.getElementById('myInput').addEventListener('keyup', myFunction);

/*
document.getElementById('myInput').addEventListener('keydown', function(event) {
    var keyCode = event.keyCode;

  Uzun if else dongulerinde kullanılır.
     switch (keyCode) {
        case 38;

    } 
   

    if (keyCode === 65) {
        console.log('Merhaba');
    } else if (keyCode === 39){
        console.log('Hi');
    } else if (keyCode === 38) {
    } else if (keyCode === 40) {
    } 
});
*/

