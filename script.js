const userName = "test";
const password = "1234";
const btn = document.getElementById("btn");

const inpValue = document.getElementById("user-name");
const pswValue =document.getElementById("password");


btn.addEventListener('click', function(){

    if(inpValue.value === userName && pswValue.value === password ){
        welcome();
    }
    else{
        alert("Fel")
    }
})

function welcome(){
    document.getElementById("user-name").style.visibility = "hidden";
    document.getElementById("password").style.visibility = "hidden";

}