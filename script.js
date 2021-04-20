const darkModeButton = document.getElementById("darkMode");

const main = document.getElementsByClassName("main")[0];
const title = main.querySelectorAll("div:nth-child(2) img");
const curve = document.getElementsByClassName("curve")[0];
const description = document.getElementsByClassName("description")[0];
const cardContainer = document.getElementsByClassName("cardContainer")[0];

darkModeButton.addEventListener("click", function(){
    document.body.classList.toggle("darkMain");
    document.body.classList.toggle("lightMain");

    main.classList.toggle("darkMain");
    main.classList.toggle("lightMain");

    if(title[0].getAttribute("src") == "Asset/char1_0002_Vector-Smart-Object.png")
    {
        title[0].setAttribute("src", "Asset/char1_0002_Vector-Smart-Object-Dark.png");
        title[1].setAttribute("src", "Asset/char1_0001_Vector-Smart-Object-Dark.png");
    }
    else if(title[0].getAttribute("src") == "Asset/char1_0002_Vector-Smart-Object-Dark.png")
    {
        title[0].setAttribute("src", "Asset/char1_0002_Vector-Smart-Object.png");
        title[1].setAttribute("src", "Asset/char1_0001_Vector-Smart-Object.png");
    }

    description.classList.toggle("darkDescription");
    description.classList.toggle("lightDescription");

    cardContainer.classList.toggle("darkCard");
    cardContainer.classList.toggle("lightCard");
});