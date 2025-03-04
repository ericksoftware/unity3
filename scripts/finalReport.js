function convertTemperatureRange() {
    let startValue = parseFloat(document.getElementById('startValue').value);
    let endValue = parseFloat(document.getElementById('endValue').value);
    let scale = document.getElementById('scale').value;

    if (isNaN(startValue) || isNaN(endValue)) {
        document.getElementById('result').innerText = "Use valid numeric values.";
        return;
    }

    if (scale !== "C" && scale !== "F") {
        document.getElementById('result').innerText = "Invalid scale, plese use a valid scale.";
        return;
    }

    let resultText = "";

    for (let temp = startValue; temp <= endValue; temp++) {
        if (scale === "C") {
            let fahrenheit = (temp * 9 / 5) + 32;
            resultText += `${temp}°C = ${fahrenheit.toFixed(2)}°F\n`;
        } else if (scale === "F") {
            let celsius = (temp - 32) * 5 / 9;
            resultText += `${temp}°F = ${celsius.toFixed(2)}°C\n`;
        }
    }

    document.getElementById('result').innerText = resultText;
}