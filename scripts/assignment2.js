function convertTemperature() {
    const temperature = prompt("Enter temperature in Celsius:");

    if (temperature !== null && !isNaN(temperature) && temperature.trim() !== "") {
        const celsius = parseFloat(temperature);
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("temperatureDisplay").textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else {
        document.getElementById("temperatureDisplay").textContent = "Invalid input. Please enter a valid number.";
    }
}