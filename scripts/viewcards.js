let cards = JSON.parse(localStorage.getItem("cards"))
let template = document.querySelector("#card-template")
let cardList = document.querySelector("#card-list")

for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    console.log(card);

    let cardView = template.textContent.cloneNode(true)

    let titleText = cardView.querySelector(".title-text")
    titleText.textContent = card.title

    let deleteBtn = cardList.querySelector(".delete-btn")
    deleteBtn.addEventListener("click", () => {
        
    })

    cardList.appendChild(cardView)
}