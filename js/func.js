'use strict';
var test = 'GLOBAL';
// || => mix // a =  a || 2 || 4 => false || true  => 2
             // a =  a || 2 => true => a
// && => mix // a =  a && 2 && 4 => false  => a
             // a =  a && 2 => true && true => 2
// == => Boolean
// >= => Boolean


function SumA(a, b){ // default = undefined, undefined
    a ||= 2;   // старый способ присвоения значения по умолчанию
    if(b === undefined ) b = 10;  // альтернативный вариант, исключа.щий ложные значения

    return a + b;
}

function SumB(a, b = 10){ // default = undefined, 10
    return a + b;
}
/*
var SumB = function(a, b = 10){ // default = undefined, 10
    return a + b;
}
*/


function SumC(a, b = 1){
    let sum = 0;
    for(let index = 0; index < arguments.length; index++)
        sum += arguments[index];
    console.log(arguments);
    console.log(a, b);
    return sum;
}

function SumD(a, b = 1, ...args){
    let sum = a + b;
    for(let param of args)
        sum += param;
    console.log(args);
    return sum;
}

function SumG(baseValue){
    var base = baseValue;
    return function(a){
        return a + base;
    }
}

console.log('SumA');
console.log(SumA());
console.log(SumA(1));
console.log(SumA(1, 2));
console.log('SumB');
console.log(SumB());
console.log(SumB(1));
console.log(SumB(1, 2));
console.log('SumC');
console.log(SumC());
console.log(SumC(1));
console.log(SumC(1, 2));
console.log(SumC(1, 2, 3));

console.log('SumD');
console.log(SumD(1));
console.log(SumD(1, 2));
console.log(SumD(1, 2, 3, 4, 6));

let sum = SumG(40),
    sum2 = SumG(20);

console.log('SumG');
console.log(sum(5));
console.log(sum2(5));

//==============================================

function makeGenerator(){
    var index = 0;
    return function(){
        return index++;
    }
}

let gen1 = makeGenerator(),
    gen2 = makeGenerator();
console.log('______________');
for(let i = 0; i < 10; i++)
    console.log(gen1());
console.log('______________');
for(let i = 0; i < 10; i++)
    console.log(gen1());
console.log('______________');
for(let i = 0; i < 10; i++)
    console.log(gen2());

// [...].forEach(func) - пробежаться по всем элементам массива
// [...].map(func)     - изменить все элементы массива, по заданному алгоритму
// [...].filter(func)  - вернуть все элементы массива, которые вернут из переданной функции true
// [...].reduce(func, initValue) - пробежаться по всем элементам и собрать например их сумму
//
// перемешивание массива случайным образом
//   [...].sort(function(a, b){ return Math.floor(Math.random() * 3) - 1 })
// отсортировать массив от меньшего к большему
//   [...].sort(function(a,b){ return a > b ? 1 : (a < b ? -1 : 0); })
// отсортировать массим от большего к меньшему
//   [...].sort(function(a,b){ return a > b ? -1 : (a < b ? 1 : 0); })

/*
ar2.sort((a, b) => {
    if(a.length > b.length)
        return 1;
    else if (a.length < b.length)
        return -1;
    else if(a > b)
        return 1;
    else if(a < b)
        return -1;
    else
        return 0;
})
*/

/*ar2.sort((a, b) => {
    let sign = Math.sign(a.length - b.length);
    if(sign != 0)
        return sign;
    return Math.sign(+a - +b);
});*/

let func  = function (a,b){ return a + b; },
    funcA = (a,b) => a + b,
    funcB = x => x * 2,
    funcC = (x,y) => {
        x += y;
        return x * 2;
    },
    funcD = () => !!window.test,
    ar = [9, 2, 20, 3, 4, 40, 1, 6, 60, 7, 8, 5],
    arS = ar.map(item => '' + item);

console.log(func(1,2), funcA(2,4));
console.log(ar.map(function(item){ return item * 2; }));
console.log(ar.map(item => item * 2));

/*
    -variable => Number
    +variable => Number
    ''+variable => String
    !!variable => Boolean


_______________________________
    let result;
    if(a > b)
        result = a;
    else
        result = b
    c = result;

    _____________
    c = a > b ? a : b
*/

function makeIterator(array){
    var nextIndex = 0;
    let obj = {
        next: function(){
            return nextIndex < array.length
                ? { value: array[nextIndex++], done: false}
                : {done: true}
        }
    };
    return obj;
}

console.log('=============================');

var it = makeIterator(['yo', 'ya', 'yu', 'ye']);
for(let result = it.next(); !result.done; result = it.next())
    console.log(result.value);

console.log('=============================');

function* makeGeneratorA(array){
    let index = 0;
    while(array.length > index)
        yield array[index++];
}

it = makeGeneratorA(['yo', 'ya', 'yu', 'ye']);
for(let result = it.next(); !result.done; result = it.next())
    console.log(result.value);

console.log('=============================');
it = makeGeneratorA(['yo', 'ya', 'yu', 'ye']);
for(let value of it)
    console.log(value);


function* idMaker(){
    let index = 0;
    while(true)
        yield index++;
}

console.log('=============================');
var IDGenerator = idMaker();
console.log(IDGenerator.next().value);
console.log(IDGenerator.next().value);
console.log(IDGenerator.next().value);
console.log(IDGenerator.next().value);
console.log(IDGenerator.next().value);
var IDGenerator2 = idMaker();
console.log(IDGenerator2.next().value);
console.log(IDGenerator2.next().value);