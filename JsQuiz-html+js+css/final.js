let correctAnswers = ['D', 'B', 'C']
let userAnswers = []

let score = 0

const q1buttons = document.querySelectorAll(".q1 button") //selects all <button> elements within qs class
const q2buttons = document.querySelectorAll(".q2 button")
const q3buttons = document.querySelectorAll(".q3 button")
const submitBtn = document.getElementById("submit-btn")

submitBtn.disabled = true

q1buttons.forEach(button => {
    button.addEventListener("click", () => {
        const userAns = button.innerText.trim()
        userAnswers[0] = userAns
        console.log(userAnswers)
        enableSubmit()

        q1buttons.forEach(btn => {
            btn.style.backgroundColor = "" // clearing all designs
        }
        )

        button.style.backgroundColor = "lightblue"
    }
    )

}

)

q2buttons.forEach(button => {
    button.addEventListener("click", () => {
        const userAns = button.textContent.trim()
        userAnswers[1] = userAns
        console.log(userAnswers)
        enableSubmit()

        q2buttons.forEach(btn => {
            btn.style.backgroundColor = ""
        }

        )

        button.style.backgroundColor = "lightblue"
    }
    )
}

)

q3buttons.forEach(button => {
    button.addEventListener("click", () => {
        const userAns = button.textContent.trim()
        userAnswers[2] = userAns
        console.log(userAnswers)
        enableSubmit()

        q3buttons.forEach(btn => {
            btn.style.backgroundColor = ""
        }
        )

        button.style.backgroundColor = "lightblue"

    }
    )
}

)

const enableSubmit = () => {
    let msg = document.getElementById("sub-msg")

    if (userAnswers[0] && userAnswers[1] && userAnswers[2]) 
    {
        submitBtn.disabled = false
        submitBtn.style.backgroundColor = "lightgreen"
        msg.textContent = "Press Submit to see score."
        msg.style.color = "green"

        /// revealscore was here - mistake
    }
    else 
    {
        msg.textContent = "Attempt all questions to continue."
        msg.style.color = "red"
    }

}

submitBtn.addEventListener("click", revealScore); // why not on cmnt 99


function revealScore() 
{
    let score = 0 // check
    console.log(correctAnswers.length)
    for (let i = 0; i < correctAnswers.length; i++) 
    {
        if (userAnswers[i] === correctAnswers[i]) 
        {
            score++
        }
    }
    let scoreEl = document.getElementById("final-score")
    scoreEl.textContent = "Your Score: " + score + "/3"

    q1buttons.forEach(button => 
    {
        if (button.innerText.trim() === correctAnswers[0]) 
        {
            button.style.backgroundColor = "lightgreen"
        }
        else if (button.innerText.trim() === userAnswers[0]) 
        {
            button.style.backgroundColor = "red"
        }
    }
    )

    q2buttons.forEach(button => 
    {
        if (button.innerText.trim() === correctAnswers[1]) 
        {
            button.style.backgroundColor = "lightgreen"
        }
        else if (button.innerText.trim() === userAnswers[1]) 
        {
            button.style.backgroundColor = "red"
        }
    }
    )

    q3buttons.forEach(button =>
    {

        if (button.innerText.trim() === correctAnswers[2]) 
        {
            button.style.backgroundColor = "lightgreen"
        }
        else if (button.innerText.trim() === userAnswers[2]) 
        {
            button.style.backgroundColor = "red"
        }
    }
    )
}



console.log(correctAnswers)