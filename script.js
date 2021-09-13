const userName = "test";
const password = "1234";
const btn = document.getElementById("btn");

const inpValue = document.getElementById("user-name");
const pswValue = document.getElementById("password");

const newDiv = document.createElement("div")
document.body.appendChild(newDiv);

btn.addEventListener('click', function(){

   

    if(inpValue.value === userName && pswValue.value === password ){
        localStorage.setItem("Name", inpValue.value);
        welcome();
        loggedIn();  
    }
    else{
        notValid();
    }
})

// Välkomstsida för den inloggade användaren
function welcome(){
    document.getElementById("user-name").style.visibility = "hidden";
    document.getElementById("password").style.visibility = "hidden";
    document.getElementById("btn").style.visibility = "hidden";
    
    // const h1 = document.createElement('h1');
    // newDiv.appendChild(h1);
    // h1.innerText = "Välkommen";
}

// Fel meddelande om inlogg uppgifterna är fel
function notValid(){
    document.getElementById("user-name").style.visibility = "hidden";
    document.getElementById("password").style.visibility = "hidden";
    document.getElementById("btn").style.visibility = "hidden";

    const h1 = document.createElement('h1');
    newDiv.appendChild(h1);
    h1.innerText = "Fel Lösenord";
}
function loggedIn(){
   let store = localStorage.getItem("Name");
   newDiv.innerHTML = "välommen " + `${store}`;

   const eraseButton = document.createElement("button"); // skapar erasebutton
   eraseButton.innerHTML = "Logout";
   newDiv.appendChild(eraseButton);
   
   eraseButton.addEventListener('click', function(){ 
       localStorage.removeItem("Name"); // tar bort item från localstorage
       newDiv.innerHTML = ""; // Div vlir en tome textsträng

       document.getElementById("user-name").style.visibility = "visible";
       document.getElementById("password").style.visibility = "visible";
       document.getElementById("btn").style.visibility = "visible";

   })

}

