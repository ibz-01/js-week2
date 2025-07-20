
const mainGame = document.getElementById("maingame")

const playGame = () =>
{
    const playBtn = document.getElementById("playBtn")
    playBtn.style.display = "none";
    mainGame.style.display = "block";
    // let timeLeft = 30;
    const timerDiv = document.getElementById("timer");

    const diff_Buttons = document.querySelectorAll(".btn")
    const buttonContainer = document.getElementById("diffButtons")
    let difficulty = ""
    let target = 0
    let attempts = 0
    let buttonPressed = false



    diff_Buttons.forEach(btn =>
    {
        btn.addEventListener("click", () => {

            const range = document.getElementById("range-el")
            
            if (btn.textContent.trim() === "Easy [0-100]")
            {
                difficulty = "Easy"
                range.textContent = "Range: 0 - 100"
                target = Math.ceil( Math.random() * 100 )
                console.log(target)
                buttonPressed = true
                attemps = 10
            }
            else if(btn.textContent.trim() === "Medium [0 - 200]")
            {
                difficulty = "Medium"
                range.textContent = "Range: 0 - 200"
                target = Math.ceil( Math.random() * 200 )
                console.log(target)
                buttonPressed = true
                attempts = 7
            }
            else
            {
                difficulty = "Hard"
                range.textContent = "Range: 0 - 500"
                target = Math.ceil( Math.random() * 500 )
                console.log(target)
                buttonPressed = true
                attemps = 5
            }


            if (buttonPressed === true)
            {
                diff_Buttons.forEach(btn => {
                btn.style.display = "none"
                })
            }
            //buttonContainer.style.display = "none"

            console.log(difficulty)


            if (buttonPressed === true)

            {


                const startButton = document.createElement("button")
                startButton.textContent = "Click to Start"
                startButton.id = "startBtn"

                buttonContainer.appendChild(startButton)
        
        
                startButton.addEventListener("click", () => {

                startButton.style.display = "none"

                let inputContainer = document.getElementById("guessContainer")
                inputContainer.style.display = "block"
            
            
                const guessInput = document.getElementById("guess-input")
                const submitBtn = document.getElementById("submitBtn")
                const feedback = document.getElementById("feedback")


                submitBtn.addEventListener("click", () => {

                    checkguess = () => {

                        const value = guessInput.value
                        console.log(value)
                    }


                }
                )
                
            

            
            
            
        //     const countdown = setInterval(() => {
        //     let minutes = Math.floor(timeLeft / 60);
        //     let seconds = timeLeft % 60;

        //     // Format as 00:30
        //     timerDiv.textContent = 
        //     `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        //     timeLeft--;

        //     if (timeLeft < 0) {
        //         clearInterval(countdown);
        //         timerDiv.textContent = "Time's up!";
        //         feedback.textContent = "⏰ Time's up! You didn't guess the number.";
        //         submitBtn.disabled = true
        //         guessInput.disabled = true

        //     }
        // }, 1000);

        
    
    

    })

    }



            
            

        }
    )
        
    }
    )

    //why not create start button here? buttonpressed comes as false
    

    

    

        
    
    
    
   
}

