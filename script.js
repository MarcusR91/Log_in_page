
//Dekelaration av mina variabler
const userName = "test";
const password = "1234";
const btn = document.getElementById("btn");

//Dessa används för att få user input
const inpValue = document.getElementById("user-name");
const pswValue = document.getElementById("password");

//Skapar nya div element för att lägga in ny info i beroende på vad användaren gör
const newDiv = document.createElement("div")
document.body.appendChild(newDiv);

const errorDiv = document.createElement("div")
document.body.appendChild(errorDiv);


btn.addEventListener('click', function () {
    //Kollar så att värdet av input stämmer överens med anv.namn och lösen
    if (inpValue.value === userName && pswValue.value === password) {
        localStorage.setItem("Name", inpValue.value); // värdet av input lagras i storage
        loggedIn(); //Funktionsanrop
    }
    else {
        notValid();
    }
})




// Fel meddelande om inlogg uppgifterna är fel
function notValid() {
    document.getElementById("user-name").style.visibility = "hidden";
    document.getElementById("password").style.visibility = "hidden";
    document.getElementById("btn").style.visibility = "hidden";

    //Skapar en ny button
    const retry = document.createElement("button");
    retry.innerText = "Try again!";
    newDiv.appendChild(retry); //Appending den nya knappen i min div

    //Felmeddelande som visas om fel uppgifterskrivs in i input
    const errorMsg = document.createElement('h1');
    errorDiv.appendChild(errorMsg);
    errorMsg.innerText = "Fel Lösenord";

    // Eventlistener till dne nya knappen
    retry.addEventListener('click', function () {

        document.getElementById("user-name").style.visibility = "visible";
        document.getElementById("password").style.visibility = "visible";
        document.getElementById("btn").style.visibility = "visible";
        newDiv.innerText = "";
        errorDiv.innerText = "";
    })
}


function loggedIn() {
    document.getElementById("user-name").style.visibility = "hidden";
    document.getElementById("password").style.visibility = "hidden";
    document.getElementById("btn").style.visibility = "hidden";
    
    let store = localStorage.getItem("Name"); //Hämtar/läser av värdet som finns i storage och lagrar i en variabel
    newDiv.innerText = "välommen " + `${store}`; //Välkomstmedelande för den inloggade

    //Skapar en logga ut knapp
    const eraseButton = document.createElement("button");
    eraseButton.innerText = "Logout";
    newDiv.appendChild(eraseButton);

    //Eventlyssnare som tar ort värdet från localstorage via knapptyck, användaren loggas ut.
    eraseButton.addEventListener('click', function () {
        localStorage.removeItem("Name"); // tar bort item från localstorage
        newDiv.innerText = ""; // Div vlir en tome textsträng

        document.getElementById("user-name").style.visibility = "visible";
        document.getElementById("password").style.visibility = "visible";
        document.getElementById("btn").style.visibility = "visible";

    })

}

function checkUser() { // funktion som skrivre ut avärdet endast om det finns ett värder, slipper null. 
    let store = localStorage.getItem("Name")

    if (store) { //om store har ett värde så ska loggedin funktionen köras och inloggrutorna ska hållas döljda
        loggedIn();
        document.getElementById("user-name").style.visibility = "hidden";
        document.getElementById("password").style.visibility = "hidden";
        document.getElementById("btn").style.visibility = "hidden";
    };
};

checkUser(); // Kör denna funktion för att hålla nvändaren inloggad under refresh
