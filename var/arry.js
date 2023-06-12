// let numbers=[1,2,3,4,5];
// console.log(numbers)
// console.log(numbers[3])
// console.log(numbers[2])
// numbers[4]=35
// console.log(numbers)
// numbers[5]='jawad'
// console.log(numbers)


//shift method

// let movies=['the lake','memento']
// console.log(movies)

// movies.shift()
// console.log(movies)

// //unshift method
// movies.unshift("the greate gas")
// console.log(movies)

// //pop method removes from the end 
// movies.pop()
// console.log(movies)

// //push method add to the end
// movies.push("the one","the second")
// console.log(movies)

// let number = [1,2,3,4,5,6,7]
// console.log(number)
// //slice method => slice(startin index ,ending index)
// let num1=number.slice(2,5)
// console.log(num1)

// num1=number.slice(-1)
// console.log(num1)

// num1=number.slice(0,6)
// console.log(num1)

// //splice method splice (starting index, number of items to be removed)

// var num2 = number.splice(0,4)
// console.log(num2)

//removin and replacing 
// num2= number.splice(0,2,22,23);
// console.log(num2)
// console.log(number)
//

//includes method
const mood =["happy","sad","relaxed"];
// console.log(mood.includes("happy"))
// console.log(mood.includes("frustrated"))

//concat method
const mood2 =["happy","sad","fuckyou","relaxed"];
console.log(mood.concat(mood2))

//reverse method
console.log(mood2.reverse())

//join method 
console.log(mood2.join())
console.log(mood2.join("--"))


//nesting arrays of arrays
const favs=[
    ['endgame','infinity wars','civil wars','ironman'],
    ['spider','yourend','musterbeat','in the window'],
    ['spider','yourend','musterbeat','in the window'],
    ['spider','yourend','musterbeat','in the window']
]
console.log(favs[2])
console.log(favs[2][2])
console.log(`${favs[2][2]} is directing to the hell`)


