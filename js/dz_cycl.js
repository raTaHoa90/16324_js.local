var marks = [];
for(let i = 10; i > 0; i--)
    marks.push( Math.floor(Math.random() * 10) );
// что бы отслеживать правильность выполнения наших задач, выводим полученный массив на экран
console.log(marks);

// avg = ([1] + [2] + [3] + [...]) / length