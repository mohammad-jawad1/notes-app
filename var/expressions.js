// let calNum= function(z,w){
//     return (z+w)/(z-w);
// };
// console.log(calNum(45,255))
// console.log(calNum(440,26))
// console.log(calNum(41,12))



//expersion


 let joy=function(score,marks){
    return (score+5) /marks;
 }

 let adams=function(score,marks){
    return score /marks;
 }

 var operation=[joy,adams];

//  for(let i=0;i<operation.length;i++){
//     let resulte=operation[i](100,20);
//     console.log(resulte)
// }

//expersion and object


for(let first of operation){
    let resulte=first(100,20)
    console.log(resulte)
}

var method={
    firstOne: joy,
    secound: adams,
}
console.log(method.firstOne(100,10))
console.log(method.secound(100,10))