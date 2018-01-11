var card = document.querySelector(".card");

card.addEventListener("click",setTimeout(
    function()
    {
        this.classList.toggle("flipped");
    }),300

);
