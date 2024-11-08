let users = [];

fetch('users.json')
    .then(response => response.json())
    .then(data => {
        users = data;
    })
    .catch(error => console.error('Error loading user data:', error));

function login() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const message = document.getElementById("message");

    const user = users.find(u => u.username === usernameInput && u.password === passwordInput);

    if (user) {
        message.style.color = "green";
        message.innerText = `Welcome, ${user.role.toUpperCase()} ${user.username}!`;
        setTimeout(() => {
            if (user.role === "admin") {
                alert("Redirecting to Admin Dashboard...");
            } else {
                alert(`Redirecting to ${user.username}'s Dashboard...`);
            }
        }, 1000);
    } else {
        message.style.color = "red";
        message.innerText = "Invalid username or password!";
    }
}
