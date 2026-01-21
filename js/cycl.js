var cars = ['bmw', 'audi', 'kia', 'vaz'];

document.writeln('NOT CYCLE<br><hr><ul>');
document.writeln('<li>' + cars[0] + '</li>');
document.writeln('<li>' + cars[1] + '</li>');
document.writeln('<li>' + cars[2] + '</li>');
document.writeln('<li>' + cars[3] + '</li>');
document.writeln('</ul>');

document.writeln('WHILE<br><hr><ul>');
let i = 0;
while( i < cars.length ) {
    document.writeln('<li>' + cars[i] + '</li>');
    //i = i + 1;
    //i += 1; // += -= *= /= ||= &&= 
    i++; // ++i, --i, i--, i++
}
document.writeln('</ul>');

document.writeln('DO WHILE<br><hr><ul>');
i = 0;
do {
    document.writeln('<li>' + cars[i] + '</li>');
    i++;
} while(i < cars.length );
document.writeln('</ul>');

document.writeln('FOR<br><hr><ul>');
for(let c = 0; c < cars.length; c++) {
    document.writeln('<li>' + cars[c] + '</li>');
}
document.writeln('</ul>');

document.writeln('FOR IN<br><hr><ul>');
for(let c in cars) {
    //let car = cars[c];
    document.writeln('<li>' + cars[c] + '</li>');
}
document.writeln('</ul>');

document.writeln('FOR OF<br><hr><ul>');
for(let car of cars) {
    document.writeln('<li>' + car + '</li>');
}
document.writeln('</ul>');