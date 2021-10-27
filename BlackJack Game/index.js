
//initalisation of global variables
let isAlive=false
let message=""
let hasBlackJack=false
let cards = []
let sum=0

// example of a player object
let player = 
{
    name:"Sushi",
    chips:150
}

//preparing the shorthand variables 
let messageEl=document.getElementById("message-el")
let cardsEl=document.getElementById("cards-el")
let sumEl=document.getElementById("sum-el")
let playerEl=document.getElementById("player-el")

playerEl.textContent=player.name+" : $"+player.chips
//operational functions
function newCard()
{
    if(isAlive===true && hasBlackJack===false)
    {
        let newCard=getRandomCard()
        cards.push(newCard)
        console.log(cards)
        sum+=newCard
        renderGame()
    }
}

//generating the card
function getRandomCard()
{   
    let randomCard =  Math.floor(Math.random()*13)+1
    if(randomCard>10)
        {
            return 10
        }
        else if(randomCard===1)
        {
            return 11
        }
        else
        {
            return randomCard
        }
}

function startGame()
{   
    if(isAlive===false)
    {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    isAlive=true
    renderGame()
    }
}
function renderGame()
{   
    //isAlive=true
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++)
    {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent="Sum: "+sum
        console.log("rendergame working")
    if(sum<21)
        {
            message = "Draw a card?"
        }
        else if(sum===21)
        {
            message = "Yay! you won!"
            hasBlackJack=true
        }
        else
        {
            message = "Game-over"
            isAlive=false
        }
        messageEl.textContent = message
}

