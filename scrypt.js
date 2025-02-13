document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if (username === "admin" && password === "12345") {
        
        window.location.href = "main.html"; 
    } else {
        errorMessage.textContent = "Неправильний логін або пароль!";
    }
});
