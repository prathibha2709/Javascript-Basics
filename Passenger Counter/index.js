let count = 0
let countId=document.getElementById("count-id")
let previousEntry=document.getElementById("previous-entry")

function increment()
{
    count += 1
    countId.textContent = count
}

function save()
{   
    previousEntry.textContent += count + "-"
    count=0
    countId.textContent = count
}