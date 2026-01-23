'strict';

var num123_$ = 123, 
    NUM123_$ = 'string value';
let varEmpty;

const NUM_FIRST = 1;

// camelCase  => numberOfCode
// snake_case => number_of_code
// PascalCase => NumberOfCode


console.log(NUM123_$);

let a = 5, b = 8;
console.log(a + b); // 13
console.log(a - b); // -3
console.log(b / a); // 1.6
console.log(a * b); // 40
console.log(a % b); // 5
console.log(a ** b);// 390625 
console.log(-a);    // -5

console.log(a << 2); // 0101 => 10100 => 20
console.log(a >> 2); // 0101 => 0001 => 1
a = 10; // => 1010
b = 6;  // => 0110
console.log(a | b); // => 1010 OR  0110 => 1110 => 14
console.log(a & b); // => 1010 AND 0110 => 0010 => 2
console.log(a ^ b); // => 1010 XOR 0110 => 1100 => 12
console.log(~a);    // => ~0000_0000_0000_0000_0000_0000_0000_1010 => 1111_1111_1111_1111_1111_1111_1111_0101 => -11

//10100101 01001010 10100101 01001010 10101010 01010010 10100110

//1010_0101 = 1 * 2^0 + 0 * 2^1 + 1 * 2^2 + 0 * 2^3 + 0 * 2^4 + 1 * 2^5 + 0 * 2^6 + 1 * 2^7 =
//= 1 + 4 + 32 + 128 = 165
//123 / 2 = 61 / 2 = 30 / 2 = 15 / 2 = 7 / 2 = 3 / 2 = 1
//1111011

// Boolean = false, true
//
//  a   |   b   |  !a   | a || b | a && b
//false | false | true  | false  | false
//false | true  | true  | true   | false
//true  | false | false | true   | false
//true  | true  | false | true   | true
//
// a > b  => Boolean
// a >= b
// a < b
// a <= b
// a == b   равны ли 
// a != b   не равны ли
// a === b  абсолютное равенство
// a !== b  абсолютное неравенство

// value = <сравнение> ? <значение, которое вернуть, если сравнение истино> : <значение, которое нужно вернуть, если значение ложное>

let c = a ? a : b;
a = '';
c = a ? a : "test";

/*
undefined
Number
String
Boolean
null
Object
    Object
    Function
    Array
    Date
    RegExp
    Map
    Set
    WeakMap
    WeakSet

BigInt
Symbol

*/

// Генерация случайного числа
// Math.floor( Math.random() * (max + 1) )
// Math.floor( Math.random() * (max - min + 1) ) + min