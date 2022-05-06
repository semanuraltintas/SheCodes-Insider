// Degisken tipleri
// string

var x = 5;
var y = 7;
var a = x + y;

// number
var month = 'Ramadan';
var holly = 'Mubarak';

// boolean
var t = true;
var z = false;

/* isimlendirme
küçük büyük harf duyarli,
bosluklarla degisken tanimlanmaz,
tanimlanan fonksiyonun acikc tamamlayan isimler verilmeli,
camelCase
PascalCase (her kelimenin bas harfi buyuk yaziliyor)
snake_case
kebab-case
*/


/* Birlestirmeler
*/


/*
typeof : string, number, boolean

 */

/*
var sentence = 'Turkiye\'nin baskenti Ankara\'dir. '  // kesme isareti kullanilacak stringlerde önce sola slash kullanılır daha sonra kesme isareti kullanilir.
document.write(sentence);

var cumle = 'Hello world. \n Merhaba Dunya';
alert(cumle);
*/


/*
Aritmetik operatorler
+ (Addition), 
- (Subtraction), 
* (Multiplication), 
/ (Division),
** (Exponentiation), 
% (modulus, Remainder), 
++ (Increment), 
-- (Decrement), 
+=,
-=,
*=,
/=,
%=

*/


// IF - ELSE (Conditional Statements)


/*
var num = 19;
if(num > 5) {
    document.write('Sayi 5\'ten buyuktur.')
} else {
    document.write('Sayi 5\'ten kucuktur.')
}
*/

function checkNumber(num) {
    if (num % 2 == 0) {
        console.log(num+ ' cift bir sayidir.');
    } else {
        console.log(num + ' tek bir sayidir.');
    }
}
checkNumber(19);
checkNumber(65);
checkNumber(85);
checkNumber(8);
checkNumber(1);
checkNumber(9);
checkNumber(123);

