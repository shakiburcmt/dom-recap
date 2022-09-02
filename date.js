const date = new Date();
console.log(date);

const date1 = new Date('1971-03-26');
const date2 = new Date('1971-12-26');


// Date compare korte 1970 theke mili second count shuru hoy sei hisabe jodi 1971 er march ar december er moddhe compare hoy tahole 1970 theke march kache ar december kintu aro dure hoye jacche 1970 theke tai less than < hone
if (date1.getTime() < date2.getTime()) {
    console.log('March was before December');
}
else {
    console.log('March was not before December');
}