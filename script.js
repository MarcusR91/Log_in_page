const userName = "test";
const password = "1234";
const btn = document.getElementById("btn");

const inpValue = document.getElementById("user-name");
const pswValue = document.getElementById("password");

const newDiv = document.createElement("div")
document.body.appendChild(newDiv);

btn.addEventListener('click', function(){

    
    localStorage.setItem("Name", inpValue.value);
   

    if(inpValue.value === userName && pswValue.value === password ){
        welcome();
        
    }
    else{
        notValid();
    }
})

function welcome(){
    document.getElementById("user-name").style.visibility = "hidden";
    document.getElementById("password").style.visibility = "hidden";
    document.getElementById("btn").style.visibility = "hidden";
    
    const h1 = document.createElement('h1');
    newDiv.appendChild(h1);
    h1.innerText = "Välkommen";
}
function notValid(){
    document.getElementById("user-name").style.visibility = "hidden";
    document.getElementById("password").style.visibility = "hidden";
    document.getElementById("btn").style.visibility = "hidden";

    const h1 = document.createElement('h1');
    newDiv.appendChild(h1);
    h1.innerText = "Fel Lösenord";
}


