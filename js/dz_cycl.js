var marks = [];
for(let i = 10; i > 0; i--)
    marks.push( Math.floor(Math.random() * 100) );
// что бы отслеживать правильность выполнения наших задач, выводим полученный массив на экран
console.log(marks);

// avg = ([1] + [2] + [3] + [...]) / length

let sum = 0,
    min = Infinity,
    max = -Infinity;
for(let mark of marks){
    sum += mark;
    if(mark > max)
        max = mark;
    if(mark < min)
        min = mark;
}

//console.log('AVG: ' + (sum / marks.length) + '; MIN: ' + min + '; MAX: ' + max);
console.log(`AVG: ${sum / marks.length}; MIN: ${min} MAX: ${max}`);