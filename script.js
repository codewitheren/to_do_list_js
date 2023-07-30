let cards = document.querySelector("div");

let input = document.querySelector(".add-input");
let button = document.querySelector(".add-button");
let date = document.querySelector(".add-date");

let demo = document.querySelector(".demo");

button.addEventListener("click", addCard);

function addCard(){
    if(input.value === ""){
        window.alert("Boş öge eklenemez");
        return ;
    }

    demo.style.display = "none";
    
    let card = document.createElement("div");
    let card_date = document.createElement("p");
    let card_p = document.createElement("p");
    let card_b = document.createElement("button");
    let card_b_i = document.createElement("i");
    
    card_date.className = "card-date";
    if(date.value === "")
        card_date.textContent = "Süresiz";
    else
        card_date.textContent = date.value;
    card.className = "card";
    card_p.textContent = input.value;
    card_b_i.className = "fa-solid fa-trash";

    console.log(card_date);

    card_b.addEventListener("click", () =>{
        card.remove();
    });
    
    card.append(card_date);
    card.append(card_p);
    card_b.append(card_b_i);
    card.append(card_b);
    cards.append(card);
    input.value = "";
    date.value = "";
}
