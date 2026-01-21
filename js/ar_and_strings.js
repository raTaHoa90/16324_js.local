let number = 123,
    numbers = [12, 34, 56],
    animals = ['собака','кошка','папугай'],
    ar = new Array(10),
    ar2 = new Array(12, 34, 56, 78, 910);

console.log(numbers[1]);     // => 34
console.log(numbers.length); // => 3

numbers[1] = 321; // => [12, 321, 56] => [0 => 12, 1 => 321, 2 => 56]
numbers[10] = 455; 
/*  => [12, 321, 56, undefined, undefined,                      // indexes = 0-4
        undefined, undefined, undefined, undefined, undefined,  // indexes = 5-9
        455]; // index = 10
*/
numbers[numbers.length] = 555; // 11 => 555
//banks[5].pages[6].locations[4].positions[14].cells[banks[5].pages[6].locations[4].positions[14].cells] = 123;
numbers.push(123, 345, 456);   // [12, 321, 56, undefined x7, 455, 555, 123, 345, 456]
let lastValue = numbers.pop(); // [12, 321, 56, undefined x7, 455, 555, 123, 345]
// lastValue = 456
numbers.unshift(6543, 876);      // [6543, 876, 12, 321, 56, undefined x7, 455, 555, 123, 345]
let firstValue = numbers.shift();// [876, 12, 321, 56, undefined x7, 455, 555, 123, 345]
// firstValue = 6543

let pos = numbers.indexOf(56); // => 3
pos = numbers.indexOf(56, pos + 1); // -1
if(numbers.indexOf(56) == -1)
    console.log('Значение отсутствует в массиве');

pos = numbers.lastIndexOf(56);

if(numbers.includes(56))
    console.log('Значение в массиве присутствует');

if('123.432'.indexOf('.') == -1)
    console.log('Точка отсутствует');

let subAr = numbers.slice(1, 3); // [12, 321, 56]

// CUT Array
subAr = numbers.splice(2, 2); ; // numbers = [876, 12, undefined x7, 455, 555, 123, 345]
// subAr = [321, 56]

// DELETE Array
numbers.splice(2, 7); // => [876, 12, 455, 555, 123, 345]
// INSERT Array
numbers.splice(3, 0, ...subAr)
// эквивалентно следующему
// numbers.splice(3, 0, subAr[0], subAr[1])
//
// => [876, 12, 455, 321, 56, 555, 123, 345]

str = '' + numbers;       // => '876,12,455,321,56,555,123,345'
str = numbers.join('; '); // => '876; 12; 455; 321; 56; 555; 123; 345'

subAr = str.split('; ');  // => ['876', '12', '455', '321', '56', '555', '123', '345']
let char = str[0];    // => 8
char = str.charAt(2); // => 6
let index = '123.3412'.indexOf('1'); // => 0
index = '123.3412'.lastIndexOf('1'); // => 6
if('123.342'.includes('.'))
    console.log('Дробное значение');

/*
    кот, КОТ, Кот, кОТ, коТ, КоТ, кОт
    => КОТ
    => кот
*/
console.log('кОт'.toUpperCase() == 'КОТ'); // => КОТ == КОТ => true
console.log('КоТ'.toLowerCase() == 'кот'); // => кот == кот => true

console.log('   кот    '.trim() == 'кот'); // => кот == кот => true

console.log((123.4324).toFixed(2)) // => 123.43
console.log((123.4354).toFixed(2)) // => 123.44