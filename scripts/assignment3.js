function convertTemperature() {
    let tempInput = document.getElementById("temperature").value;
    let scale = document.getElementById("scale").value;
    let resultElement = document.getElementById("result");
    let convertedTemp;
    
    if (tempInput === "") {
        resultElement.textContent = "Please enter a temperature";
        resultElement.className = "";
        return;
    }
    
    let temp = parseFloat(tempInput);
    
    if (scale === "C") {
        convertedTemp = (temp * 9/5) + 32;
        resultElement.textContent = `${temp}°C is ${convertedTemp.toFixed(2)}°F`;
    } else {
        convertedTemp = (temp - 32) * 5/9;
        resultElement.textContent = `${temp}°F is ${convertedTemp.toFixed(2)}°C`;
    }
    
    resultElement.className = "";
    if (convertedTemp <= 10 && scale === "C") {
        resultElement.classList.add("cold");
    } else if (convertedTemp > 10 && convertedTemp <= 20 && scale === "C") {
        resultElement.classList.add("warm");
    } else if (convertedTemp > 20 && scale === "C") {
        resultElement.classList.add("hot");
    } else if (convertedTemp <= 50 && scale === "F") {
        resultElement.classList.add("cold");
    } else if (convertedTemp > 50 && convertedTemp <= 68 && scale === "F") {
        resultElement.classList.add("warm");
    } else if (convertedTemp > 68 && scale === "F") {
        resultElement.classList.add("hot");
    }
}