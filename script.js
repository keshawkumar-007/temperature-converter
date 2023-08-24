function convertToCelsius() {
    var celsiusInput = document.getElementById("celsiusInput").value;
    var fahrenheitResult = (celsiusInput * 9/5) + 32;
    document.getElementById("fahrenheitResult").innerText = "Fahrenheit: " + fahrenheitResult.toFixed(2);
}

function convertToFahrenheit() {
    var fahrenheitInput = document.getElementById("fahrenheitInput").value;
    var celsiusResult = (fahrenheitInput - 32) * 5/9;
    document.getElementById("celsiusResult").innerText = "Celsius: " + celsiusResult.toFixed(2);
}
