

let cardsarr = []
let sum = 0

let hasBlackJack = false
let gameOver = true

let message = ""

let messageEl = document.getElementById("msg-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
//let targetEl = document.getElementById("target-el")

function rendergame()
{
    
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cardsarr.length; i++)
        cardsEl.textContent += cardsarr[i] + " "
    if(sum <= 20)
    {
        message = "Do you want to draw a new card?"
        document.getElementById("draw-btn").style.display = "inline-block"
    }
    else if(sum === 21)
    {
        message = "You Won!"
        hasBlackJack = true
        document.getElementById("draw-btn").style.display = "none"
    }
    else
    {
        message = "You lost."
        gameOver = true
        document.getElementById("draw-btn").style.display = "none"
    }

    messageEl.textContent = message
}

function playgame()
{
    gameOver = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cardsarr = [firstCard, secondCard]
    sum = firstCard + secondCard
    rendergame()
}

function drawcard()
{
    let newCard = getRandomCard()
    cardsarr.push(newCard)
    sum += newCard
    rendergame()
}

function getRandomCard()
{
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1)
        return 11 //card rules
    if (randomNumber > 10 )
        return 10 //card rules
    return randomNumber
}

//make restart button