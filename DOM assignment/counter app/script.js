const increment = document.querySelector(".btn2")
const decrement = document.querySelector (".btn1")
const reset = document.querySelector(".reset")
const value = document.querySelector(".counter")
value.style.paddingTop = "0.5em"
let num = value.textContent;
function addone(value){
    let number = +value
    number = number + 1;
    return number;
}
function substractionone(value){
   let number = +value
   number = number - 1;
    return number;
}
increment.addEventListener("click",()=> {
   value.textContent = addone(num)
   num = +value.textContent
} )
decrement.addEventListener("click" , () => {
    value.textContent = substractionone(num)
    num = +value.textContent
})
reset.addEventListener("click",()=> {
    value.textContent = +"0"
    num = +value.textContent;
})