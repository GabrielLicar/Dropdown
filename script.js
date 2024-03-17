const button = document.querySelector("button");

button.addEventListener("click", (e) => {
    const card = document.getElementById("card");
    card.classList.toggle("hidden");
})

lucide.createIcons();