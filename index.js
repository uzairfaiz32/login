var emails = [];
var passwords = [];


let emailQuantity = parseInt(prompt("Enter Your Email Quantity"));
for (let i=1; i<=emailQuantity; i++){

    let newEmail = prompt("Enter Email" + i);
    let newPass = prompt("Enter Password" + i);
    emails.push(newEmail);
    passwords.push(newPass);
}
// Login Email & Password:
let loginEmail = prompt("Enter Email");
let loginPass = prompt("Enter Pass");
let LoginSuccess =false;

for (let i=0; i<emails.length;i++){
    if(emails[i]===loginEmail && passwords[i]===loginPass){
        LoginSuccess=true;
        break;
    }
}
if(LoginSuccess){
    alert("You are successfully login");
}
else{
    alert("Email / Password Incorrect")
}

