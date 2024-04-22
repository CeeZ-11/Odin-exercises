//javascript code goes here


let userInput = prompt("Who's there?", "");

if (userInput === "Admin"){
    let userInputPassword = prompt("Please Enter Password", "");
    if (userInputPassword === "TheMaster"){
        alert("Welcome!");
    }

    else if(userInputPassword === null || userInputPassword === ""){
        alert("Canceled");
         }

    else{
        alert("Wrong Password");
        }
}

else if(userInput === null || userInput === ""){
    alert("Canceled");
}

else{
	 alert("I don't know you");
}
