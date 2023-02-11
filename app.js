const url = "https://type.fit/api/quotes";
const quoteArea = document.querySelector(".quote p");
const author = document.querySelector("strong");
const stars = document.querySelector(".stars");
let randomNumber = Math.floor(Math.random() * 1644);

async function getQuotes(url){
    try {

        const response = await fetch(url);
        const body = await response.json();
        // console.log(body);

        quoteArea.innerHTML = body[randomNumber].text;
        author.innerHTML += body[randomNumber].author;


    } catch (e) {
        console.error(e);
    }
}

function createStars(){
    for(let i = 0; i < 5; i++){
        images = document.createElement('img');
        images.src = "star.svg";
        images.classList.add('star');
        stars.appendChild(images);
    }
}

function handleRate(){
    const hoverStars = document.querySelectorAll('.star');
    const counter = document.querySelector(".counter strong");

    for(let i = 0; i < hoverStars.length; i++){

        hoverStars.forEach((star, index) => {
            star.addEventListener("click", ()=>{
                stars.classList.add("disabled");
                hoverStars.forEach((otherStar, otherIndex)=>{
                    if(otherIndex <= index){
                        otherStar.src = "color.svg";
                        counter.innerHTML = index + 1;
                    }
                })
            })
        })
    }
}

getQuotes(url);
createStars();
handleRate();