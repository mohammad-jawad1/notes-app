const btn=document.querySelector('button');
        btn.addEventListener("click",function(){
            document.body.style.backgroundColor="olivedrab";
        });


// Number
// String
// Boolean
// undefined
// null
// Symbol
// ImageBitmapRenderingContext

/* -------------------------- reference types

arrays
objects
functions


*/
// // array
// let number=[1,3,4,5];
// console.log(number)

// //object
// const person={
//     name: "mike",
//     age:35,
// }
// console.log(person)


// //function
// function add(){
//     return (2+5)*6;

// }
// console.log(add());
    
//VARIABLE DECLARATIONS
/* 
1-var
2-let
3-const
*/
//make sens,understandable cameCase
// let age=25;
// console.log(age)
// var firstName2='muslim';
// //console.log(firstName);

// var firstName='mike';
// console.log(firstName);
// console.log(firstName.length);
// console.log(firstName2.length)
// //STRING METHOD
// let city = new String("london");
// console.log(city);

// //STRING LITERAL
// let movie='memento';
// console.log(movie);

// //to Upper Case Mthod
// console.log(movie.toUpperCase())

// //concatanation
// let first ='tony';
// let last ='rogers';

// console.log(first + last)
// console.log(first +" "+ last)

// //using a string  template literal
// console.log(`${first} ${last}`)

// //length
// console.log(first.length);
// console.log(last.length);

// finding the index
let pet ='Birdy the bird'
console.log(pet);
console.log(pet[2]);
console.log(pet[8]);
console.log(pet[pet.length-2])

//trim method remove space from two side
let song="      shallow        "
console.log(song.trim())

//indexof method you type alphabet to find the index
console.log(song.indexOf("s"))
//charat method
console.log(song.charAt(7))
//slice method
console.log(pet.slice(4))
console.log(pet.slice(4,20,1))
//split method
console.log(pet.split(""))
//includes method
// console.log(pet.includes("@"))
// console.log(pet.includes("i"))
console.log(pet.replace("the","a"))
