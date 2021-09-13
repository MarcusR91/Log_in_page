const userName = "test";
const password = "1234";
const btn = document.getElementById("btn");

const inpValue = document.getElementById("user-name");
const pswValue =document.getElementById("password");


btn.addEventListener('click', function(){

    if(inpValue.value === userName && pswValue.value === password ){
        alert("rätt")
    }
    else{
        alert("Fel")
    }
})