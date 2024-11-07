let isOn = false;

document.getElementById("toggle").addEventListener("click", () => {
    if (isOn) {
        console.log("OFF!");
    } else {
        console.log("ON!");
    }
    isOn = !isOn; 
});
