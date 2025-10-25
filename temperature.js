function convertTemp() {
    const input = parseFloat(document.getElementById("mainTempInput").value);
    const from = document.getElementById("temp1").value;
    const to = document.getElementById("temp2").value;
    const resultsDiv = document.getElementById("results");
    const mainResult = document.getElementById("mainResult");
    const allResults = document.getElementById("allResults");
  
    // Reset previous content and styles
    mainResult.textContent = "";
    allResults.innerHTML = "";
    resultsDiv.style.display = "block";
    resultsDiv.style.border = "1px solid #00ffff55";
    mainResult.style.color = "#00ffff";
  
    // Input validation
    if (isNaN(input)) {
      mainResult.innerHTML = "⚠ Please enter a valid temperature value.";
      mainResult.style.color = "#ff5555";
      resultsDiv.style.border = "1px solid #ff555533";
      return;
    }
  
    if (!from || !to) {
      mainResult.innerHTML = "⚠ Please select both 'from' and 'to' units.";
      mainResult.style.color = "#ff5555";
      resultsDiv.style.border = "1px solid #ff555533";
      return;
    }
  
    let celsius;
  
    // Convert input to Celsius first
    if (from === "Celsius") celsius = input;
    else if (from === "Fahrenheit") celsius = (input - 32) * 5 / 9;
    else if (from === "Kelvin") celsius = input - 273.15;
  
    // Convert Celsius to all
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;
  
    // Convert to target unit
    let resultValue;
    if (to === "Celsius") resultValue = celsius.toFixed(2) + " °C";
    else if (to === "Fahrenheit") resultValue = fahrenheit.toFixed(2) + " °F";
    else if (to === "Kelvin") resultValue = kelvin.toFixed(2) + " K";
  
    // Display results
    mainResult.innerHTML = resultValue;
    mainResult.style.color = "#00ffff";
    resultsDiv.style.border = "1px solid #00ffff55";
    allResults.innerHTML = `
      Celsius: ${celsius.toFixed(2)} °C<br>
      Fahrenheit: ${fahrenheit.toFixed(2)} °F<br>
      Kelvin: ${kelvin.toFixed(2)} K
    `;
  }
