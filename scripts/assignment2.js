function convertTemperature() {
    const temperature = prompt("Enter temperature in Celsius:");
    if (temperature !== null && !isNaN(temperature) && temperature.trim() !== "") {
        const celsius = parseFloat(temperature);
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("temperatureDisplay").textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
        drawThermometer(celsius);
    } else {
        document.getElementById("temperatureDisplay").textContent = "Invalid input. Please enter a valid number.";
    }
}

function drawThermometer(temp) {
    const canvas = document.getElementById("thermometerCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#333";
    ctx.fillRect(40, 20, 20, 230);
    ctx.beginPath();
    ctx.arc(50, 260, 30, 0, Math.PI * 2);
    ctx.fill();
    
    let gradient = ctx.createLinearGradient(0, 20, 0, 250);
    gradient.addColorStop(0, "red");
    gradient.addColorStop(1, "cyan");
    
    let height = Math.min(Math.max((temp + 10) * 2, 0), 230); 
    ctx.fillStyle = gradient;
    ctx.fillRect(40, 250 - height, 20, height);
    
    ctx.beginPath();
    ctx.arc(50, 260, 25, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = "black"; 
    ctx.fillStyle = "white";
    ctx.font = "14px Arial";
    ctx.fillText(`${temp}°C`, 65, 250 - height - 5);
}