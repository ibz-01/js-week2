 
 
function updateTime()
{ 
    const dateTime = new Date();
    
    const date = dateTime.toLocaleDateString()
    const time = dateTime.toLocaleTimeString()
    document.getElementById("dateAndTime").textContent = date + " " + time
}

setInterval(updateTime, 1000) //updates every second


function buttonPress()
{
    const container = document.getElementById("inputs")


    const wrapper = document.createElement("div")
    wrapper.style.display = "flex"
   

    const input = document.createElement("input")
    input.id = "input-field"
    input.type = "text"
    input.placeholder = "Enter Task..."

    const delButton = document.createElement("button")
    delButton.className = "deleteButton"
    delButton.textContent = "🗑️"
    delButton.onclick = function delPressed()
    {
        input.style.textDecoration = "line-through"
        input.style.opacity = "0.5"
        delButton.style.textDecoration  ="line-through"
        delButton.style.opacity = "0.5"
    }

    

    
    wrapper.appendChild(input)
    wrapper.appendChild(delButton)

    container.appendChild(wrapper)

}

