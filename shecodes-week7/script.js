var courseList = ['John', 'Lisa', 'Melissa', 'Ali', 'Mohammad', 'Mariam']

// console.log(courseList);

/*
var person = {
    name: 'John',
    surname: 'Bolter',
    age: 33,
};

var person = {
    name: 'Melissa',
    surname: 'Bolter',
    age: 13,
};

var person = {
    name: 'Lisa',
    surname: 'Bolter',
    age: 53,
};
*/

// console.log(person);

// Object Array: (key:value)

// Array Methods
toString()
join()
pop()
push() // array'in sonuna ekler
shift() // array'in başından eleman çıkarır
unshift() // array'in başına ekler
concat() // iki farklı array'i birleştirir
splice() // array'den konumuna göre elaman silinir
slice() // array'de verilen index kadar baştan eleman alır bastırılır.
indexOf()
includes()

// For in (key in object)- While Loop (condition)

var index = 0;

for (index in courseList.length) {
    console.log(courseList[index]);
}

/* while (index < courseList.length) {
    console.log(courseList[index]);
}
*/