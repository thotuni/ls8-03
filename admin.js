let username = prompt("Who's there? ");
if (username == 'Admin'){
    let password = prompt("Enter your password");
    if(password=='TheMaster'){
        alert('Welcome')
    }
    else if(password == 'null')
    alert("Canceled");
    else 
    alert("Wrong password");
}else if(username == 'null')
    alert("Canceled");
else 
    alert("I don't know you");