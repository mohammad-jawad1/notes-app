// function sum(x) {
//     return function(y){
//         return x+y;
//     }
// };
// let num=sum(5)
// console.log(num(9))
let btu=document.querySelector('button')
let para=document.querySelector('p')
btu.addEventListener('click',function(){
    para.classList.add('active')
})