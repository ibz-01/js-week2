let num1 = document.getElementById("num1-el")
let num2 = document.getElementById("num2-el")





function add()
{
    let answer = Number(num1.value) + Number(num2.value)
    document.getElementById("sum-el").textContent = "Answer: " + answer 
}

function subtract()
{
    let answer = Number(num1.value) - Number(num2.value)
    document.getElementById("sum-el").textContent = "Answer: " + answer

}

function multiply()
{
    let answer = Number(num1.value) * Number(num2.value)
    document.getElementById("sum-el").textContent = "Answer: " + answer

}

function divide()
{
    let answer = Number(num1.value) / Number(num2.value)
    document.getElementById("sum-el").textContent = "Answer: " + answer

}