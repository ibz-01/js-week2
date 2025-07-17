
const saveBtn = document.getElementById("save-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let mySaves = []
let listItems = ""

saveBtn.addEventListener("click", function() {

    mySaves.push(inputEl.value)
    renderList()
    inputEl.value = ""

})

function renderList() 
{
    let listItems = ""
    for (let i = 0; i < mySaves.length; i++)
    {
        //ulEl.innerHTML += "<li>" + mySaves[i] + "</li>"
        
        //const list = document.createElement("ul")
        //list.textContent += mySaves[i]
        //ulEl.appendChild(list) same as above

        listItems +=` //template string (learn more)
        <li> 
            <a href='${mySaves[i]}' target='_blank'>  
                ${mySaves[i]}  
            </a>
        </li>`   

    }

    ulEl.innerHTML = listItems
}