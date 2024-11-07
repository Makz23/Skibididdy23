let users = [];

// Fetch user data from the JSON file
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

    // Find user in the JSON array
    const user = users.find(u => u.username === usernameInput && u.password === passwordInput);

    if (user) {
        // Successful login
        message.style.color = "green";
        message.innerText = `Welcome, ${user.role.toUpperCase()} ${user.username}!`;
        // Redirect based on role (simulated with an alert for this example)
        setTimeout(() => {
            if (user.role === "admin") {
                alert("Redirecting to Admin Dashboard...");
            } else {
                alert(`Redirecting to ${user.username}'s Dashboard...`);
            }
        }, 1000);
    } else {
        // Failed login
        message.style.color = "red";
        message.innerText = "Invalid username or password!";
    }
}
