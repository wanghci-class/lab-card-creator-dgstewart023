let preview = document.getElementById("preview")

preview.addEventListener("click", () => {
    document.querySelector(".title-text").textContent = document.getElementById("title").value
    document.querySelector(".subtitle-text").textContent = document.getElementById("subtitle").value
    document.querySelector(".to-text").textContent = document.getElementById("to").value
    document.querySelector(".message-text").textContent = document.getElementById("message").value
    document.querySelector(".from-text").textContent = document.getElementById("from").value
})

document.getElementById("save-btn").addEventListener("click", function(event) {
    // event.preventDefault();
    var cards = localStorage.getItem("cards");
    if (cards === null) {
    cards = [];
    } else {
    cards = JSON.parse(cards);
    }
    var currentCard = {
    to: document.getElementById("to").value,
    from: document.getElementById("from").value,
    title: document.getElementById("title").value,
    subtitle: document.getElementById("subtitle").value,
    message: document.getElementById("message").value
    };
    cards.push(currentCard);
    localStorage.setItem("cards", JSON.stringify(cards));
    });