const passwordBox = document.getElementById("password");
const lenght = 10;

const upperCase = "ABCDEFGHIJKLMNOPRSTUVYZWX";
const lowerCase = "abcdefghijklmnoprstuvyzwx";
const numbers = "0123456789";
const symbol = "-_.#*=";

const allCharacters = upperCase + lowerCase + numbers + symbol;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (lenght > password.length) {
        password+=allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    passwordBox.value=password;
}

function copyPassword(){
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
}