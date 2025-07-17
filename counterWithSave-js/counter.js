
let totalCount = document.getElementById("total-count")
let saves = document.getElementById("saves-el")
let count = 0


function increment()
{
    count += 1
    totalCount.innerText = count
    
}

function decrement()
{
    count -= 1
    totalCount.innerText = count
}

function save()
{
    let countString = count + " - "
    saves.textContent += countString // .textContent for spacing
    totalCount.textContent = 0
    count = 0
    console.log(count)
}

//ec6
//async js
