let cards = JSON.parse(localStorage.getItem("cards"))
let template = document.querySelector("#card-template")
let cardList = document.querySelector("#card-list")

for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    console.log(card);

    let cardView = template.textContent.cloneNode(true)

    let titleText = cardView.querySelector(".title-text")
    titleText.textContent = card.titleText

    let subtitleText = cardView.querySelector(".subtitle-text")
    subtitleText.textContent = card.subtitleText

    let toText = cardView.querySelector(".to-text")
    toText.textContent = card.toText

    let fromText = cardView.querySelector(".from -text")
    fromText.textContent = card.fromText

    let messageText = cardView.querySelector(".message-text")
    messageText.textContent = card.messageText

    let deleteBtn = cardList.querySelector(".delete-btn")
    deleteBtn.addEventListener("click", () => {
        cards.splice(i, 1)
        localStorage.setItem("cards", JSON.stringify(cards))
        location.reload
    })

    cardList.appendChild(cardView)
}