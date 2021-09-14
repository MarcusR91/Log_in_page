const userName = "test";
const password = "1234";
const btn = document.getElementById("btn");

const inpValue = document.getElementById("user-name");
const pswValue = document.getElementById("password");

const newDiv = document.createElement("div")
document.body.appendChild(newDiv);

const errorDiv = document.createElement("div")
document.body.appendChild(errorDiv);

btn.addEventListener('click', function () {



    if (inpValue.value === userName && pswValue.value === password) {
        localStorage.setItem("Name", inpValue.value);
        loggedIn();
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

    const retry = document.createElement("button");
    retry.innerText = "Try again!";
    newDiv.appendChild(retry);

    const errorMsg = document.createElement('h1');
    errorDiv.appendChild(errorMsg);
    errorMsg.innerText = "Fel Lösenord";

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
    let store = localStorage.getItem("Name");
    newDiv.innerText = "välommen " + `${store}`;

    const eraseButton = document.createElement("button"); // skapar erasebutton
    eraseButton.innerText = "Logout";
    newDiv.appendChild(eraseButton);

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
